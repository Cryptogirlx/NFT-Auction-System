pragma solidity 0.8.11;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "contracts/interfaces/INFTContract.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Auction is Ownable, ReentrancyGuard {
    address public treasuryAddress;
    address public DAOWallet;
    uint256 public auctionCount;

    IERC20 public USDC;

    // -------------------------------------------------------------
    // STORAGE
    // --------------------------------------------------------------

    struct Auction {
        address nftOwner; // address of NFT owner
        address nftContract; // address of NFT contract
        uint256 tokenID;
        uint256 startTime;
        uint256 endTime;
        uint256 reservePrice;
        bool isActive;
    }

    struct Bid {
        uint256 auctionID;
        address bidder;
        uint256 amount;
        uint256 timestamp;
    }

    mapping(uint256 => Auction) public auctions;
    mapping(uint256 => bool) public claimed;
    mapping(uint256 => address) private highestBidder;
    mapping(uint256 => mapping(address => Bid)) public bids;
    mapping(address => uint256) public bidderRefundBalance; // for everyone that didn't win
    mapping(address => uint256) public claimableSellerFunds;

    // --------------------------------------------------------------
    // EVENTS
    // --------------------------------------------------------------

    event AuctionCreated(
        address owner,
        uint256 startTime,
        uint256 endTime,
        uint256 tokenID,
        uint256 reservePrice
    );
    event AuctionCancelled(uint256 auctionID);
    event BidPlaced(uint256 auctionId, uint256 amount);
    event NFTClaimedByWinner(
        uint256 auctionID,
        address recipient,
        uint256 tokenID
    );
    event NFTClaimedByOwner(
        uint256 auctionID,
        address recipient,
        uint256 tokenID
    );
    event BidderRefundClaimed(address recipient, uint256 amount);
    event SellerFundsClaimed(address recepient, uint256 amount);
    event TreasuryAddressSet(address treasury);
    event DAOWalletAddressSet(address walletAddress);

    // --------------------------------------------------------------
    // CUSTOM ERRORS
    // --------------------------------------------------------------

    error DoesNotOwnNFT();
    error IncorrectTimesGiven();
    error AuctionNeedsToEndInFuture();
    error AuctionHasNotEnded();
    error AuctionHasNotStarted();
    error AuctionInactive();
    error BidNotHighEnough();
    error InsufficientBalanceToClaim();
    error AuctionAlreadyEnded();
    error BidTooLow();
    error SellerCannotBid();
    error CannotClaimFunds();
    error CannotClaimNFT();
    error AuctionStillActive();
    error NFTAlreadyClaimed();
    error CannotCancelAuction();
    error ZeroAddressNotAllowed();
    error OnlyRegisteredNFT();
    error OnlyNFTOwnerCanMoveFunds();
    error NoFundsToMove();
    error AuctionHasEnded();
    error OnlyWalletOrTreasury();
    error InsufficientBalanceToMove();

    // --------------------------------------------------------------
    // CONSTRUCTOR
    // --------------------------------------------------------------

    constructor(address _usdc) {
        USDC = IERC20(_usdc);
        USDC.approve(address(this), type(uint256).max);
    }

    // --------------------------------------------------------------
    // STATE-MODIFYING FUNCTIONS
    // --------------------------------------------------------------

    /**
        @notice sets Treasury address for transfering funds
        @param _treasuryAddress address of Treasury contract
    */
    function setTreasuryAddress(address _treasuryAddress) public onlyOwner {
        if (_treasuryAddress == address(0)) revert ZeroAddressNotAllowed();
        treasuryAddress = _treasuryAddress;
        USDC.approve(_treasuryAddress, type(uint256).max);

        emit TreasuryAddressSet(_treasuryAddress);
    }

    /**
        @notice sets DAO wallet address for transfering funds
        @param _DAOWallet address of DAO wallet
    */
    function setDAOWalletAddress(address _DAOWallet) public onlyOwner {
        if (_DAOWallet == address(0)) revert ZeroAddressNotAllowed();
        DAOWallet = _DAOWallet;
        emit DAOWalletAddressSet(_DAOWallet);
    }

    /**
        @notice creates NFT auction with given parameters
        @param _auction object, contains parameters for auction creation
    */
    function createAuction(Auction memory _auction) public returns (uint256) {
        INFTContract NftContract = INFTContract(_auction.nftContract);
        if (NftContract.ownerOf(_auction.tokenID) != msg.sender)
            revert DoesNotOwnNFT();
        if (_auction.startTime > _auction.endTime) revert IncorrectTimesGiven();

        auctionCount++;
        auctions[auctionCount] = _auction;
        auctions[auctionCount].isActive = true;

        emit AuctionCreated(
            _auction.nftOwner,
            _auction.startTime,
            _auction.endTime,
            _auction.tokenID,
            _auction.reservePrice
        );

        // transfer NFT to contract
        NftContract.transferFrom(
            _auction.nftOwner,
            address(this),
            _auction.tokenID
        );
        // activate auction if it's time

        return auctionCount;
    }

    /**
        @notice cancels an NFT auction 
        @param auctionID ID of auction to be cancelled
    */
    function cancelAuction(uint256 auctionID) public {
        if (msg.sender != auctions[auctionID].nftOwner)
            revert CannotCancelAuction();
        if (!auctions[auctionID].isActive) revert AuctionInactive();
        // Need to test this line
        if (auctions[auctionID].endTime <= block.timestamp)
            revert AuctionInactive();

        auctions[auctionID].isActive = false;

        // current highest bid moves to being reclaimable

        address lastBidder = highestBidder[auctionID];
        uint256 highestBid = bids[auctionID][lastBidder].amount;

        emit AuctionCancelled(auctionID);
    }

    /**
        @notice creates a bid on an auction
        @param _bid object contains parameters for bid created
    */
    function bid(Bid memory _bid) public payable nonReentrant {
        uint256 auctionId = _bid.auctionID;
        if (auctions[auctionId].endTime < block.timestamp)
            revert AuctionHasEnded();
        if (!auctions[auctionId].isActive) revert AuctionInactive();
        address lastBidder = highestBidder[auctionId];
        uint256 highestBid = bids[auctionId][lastBidder].amount;
        if (_bid.amount < highestBid) revert BidTooLow();
        if (_bid.amount < auctions[auctionId].reservePrice) revert BidTooLow();
        if (auctions[auctionId].nftOwner == msg.sender)
            revert SellerCannotBid();

        address bidderAddress = _bid.bidder;
        bids[auctionId][bidderAddress] = _bid; // TODO check this logic

        highestBidder[auctionId] = msg.sender;
        // save balance in case of refund
        bidderRefundBalance[msg.sender] += _bid.amount;

        // set claimable seller funds to highest bid ( not add just change number?);
        claimableSellerFunds[auctions[auctionId].nftOwner] = _bid.amount;

        //transfer funds to contract
        USDC.transferFrom(msg.sender, address(this), _bid.amount);

        emit BidPlaced(auctionId, _bid.amount);
    }

    /**
        @notice claims NFT for winner after successful acution or for seller if the auction was cancelled
        @param auctionID ID of auction
        @param recipient address to claim NFT to
    */
    function claimNFT(uint256 auctionID, address recipient) public {
        INFTContract NftContract = INFTContract(
            auctions[auctionID].nftContract
        );
        if (auctions[auctionID].endTime < block.timestamp) {
            auctions[auctionID].isActive = false;
        }
        if (auctions[auctionID].isActive) revert AuctionStillActive();
        address owner = NftContract.ownerOf(auctions[auctionID].tokenID);
        if (owner == recipient) revert NFTAlreadyClaimed();

        address winner = highestBidder[auctionID];
        if (winner == recipient || winner == msg.sender) {
            //deduct nft price from refundable balance
            uint256 nftPrice = bids[auctionID][winner].amount;
            bidderRefundBalance[winner] -= nftPrice;
            NftContract.transferFrom(
                address(this),
                recipient,
                auctions[auctionID].tokenID
            );
            emit NFTClaimedByWinner(
                auctionID,
                recipient,
                auctions[auctionID].tokenID
            );
        }

        if (
            auctions[auctionID].nftOwner == recipient ||
            auctions[auctionID].nftOwner == msg.sender
        ) {
            NftContract.transferFrom(
                address(this),
                recipient,
                auctions[auctionID].tokenID
            );
            emit NFTClaimedByOwner(
                auctionID,
                recipient,
                auctions[auctionID].tokenID
            );
        }
    }

    /**
        @notice bidders who didn't win can claim their funds back if this function is turned on or owner can claim NFT back if auction is cancelled
        @param auctionID ID of auction for NFT
        @param recipient address of bidder for refund
    */
    function claimFunds(uint256 auctionID, address recipient) public {
        if (auctions[auctionID].endTime < block.timestamp) {
            auctions[auctionID].isActive = false;
        }
        if (auctions[auctionID].isActive) revert AuctionStillActive();
        if (recipient == auctions[auctionID].nftOwner) {
            uint256 payoutAmount = claimableSellerFunds[recipient];
            // deduct amount from seller funds
            claimableSellerFunds[recipient] -= payoutAmount;
            // transfer funds to nftOwner
            USDC.transferFrom(address(this), recipient, payoutAmount);
            emit SellerFundsClaimed(recipient, payoutAmount);
        }
        if (recipient != highestBidder[auctionID]) {
            uint256 payoutAmount = bidderRefundBalance[recipient];
            bidderRefundBalance[recipient] -= payoutAmount;
            // transfer funds to bidder
            USDC.transferFrom(address(this), recipient, payoutAmount);
            emit BidderRefundClaimed(recipient, payoutAmount);
        } else {
            revert CannotClaimFunds();
        }
    }

    /**
        @notice moves funds out of contract to treasury or a given wallet
        @param to address of treasury or wallet to move funds to
        @param depositToAave amount to deposit to Aave, this amount can't be zero
    */
    function moveFundsOutOfContract(
        address to,
        uint256 amount,
        uint256 depositToAave
    ) public onlyOwner {
        require(
            to == treasuryAddress || to == DAOWallet,
            "OnlyWalletOrTreasury"
        );
        if (to == DAOWallet) {
            uint256 payoutAmount = claimableSellerFunds[
                auctions[auctionCount].nftOwner
            ];
            if (payoutAmount == 0) revert NoFundsToMove();
            if (amount > payoutAmount) revert InsufficientBalanceToMove();
            claimableSellerFunds[auctions[auctionCount].nftOwner] -= amount;
            USDC.transferFrom(address(this), DAOWallet, payoutAmount);
        }
        if (to == treasuryAddress) {
            uint256 payoutAmount = claimableSellerFunds[
                auctions[auctionCount].nftOwner
            ];
            if (payoutAmount == 0) revert NoFundsToMove();
            if (amount > payoutAmount) revert InsufficientBalanceToMove();

            claimableSellerFunds[auctions[auctionCount].nftOwner] -= amount;
            USDC.transferFrom(address(this), treasuryAddress, payoutAmount);
        }
    }

    // --------------------------------------------------------------
    // VIEW FUNCTIONS
    // --------------------------------------------------------------

    function isAuctionActive(uint256 auctionID) public view returns (bool) {
        return auctions[auctionID].isActive;
    }

    // Changed internal to public visibility
    // Is there a reason its internal?
    function getHighestBidder(uint256 auctionID) public view returns (address) {
        return highestBidder[auctionID];
    }

    function getClaimableSellerFunds(address account)
        public
        view
        returns (uint256)
    {
        return claimableSellerFunds[account];
    }

    function getBidderRefundBalance(address account)
        public
        view
        returns (uint256)
    {
        bidderRefundBalance[account];
    }

    function getAuctionDetails(uint256 auctionID)
        public
        view
        returns (Auction memory)
    {
        return auctions[auctionID];
    }

    function getBidDetails(uint256 auctionID, address bidder)
        public
        view
        returns (Bid memory)
    {
        return bids[auctionID][bidder];
    }
}
