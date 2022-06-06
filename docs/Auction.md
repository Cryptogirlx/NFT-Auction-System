# Auction









## Methods

### DAOWallet

```solidity
function DAOWallet() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### USDC

```solidity
function USDC() external view returns (contract IERC20)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined

### auctionCount

```solidity
function auctionCount() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### auctions

```solidity
function auctions(uint256) external view returns (address nftOwner, address nftContract, uint256 tokenID, uint256 startTime, uint256 endTime, uint256 reservePrice, bool isActive)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| nftOwner | address | undefined
| nftContract | address | undefined
| tokenID | uint256 | undefined
| startTime | uint256 | undefined
| endTime | uint256 | undefined
| reservePrice | uint256 | undefined
| isActive | bool | undefined

### bid

```solidity
function bid(Auction.Bid _bid) external payable
```

creates a bid on an auction



#### Parameters

| Name | Type | Description |
|---|---|---|
| _bid | Auction.Bid | object contains parameters for bid created

### bidderRefundBalance

```solidity
function bidderRefundBalance(address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### bids

```solidity
function bids(uint256, address) external view returns (uint256 auctionID, address bidder, uint256 amount, uint256 timestamp)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined
| _1 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| auctionID | uint256 | undefined
| bidder | address | undefined
| amount | uint256 | undefined
| timestamp | uint256 | undefined

### cancelAuction

```solidity
function cancelAuction(uint256 auctionID) external nonpayable
```

cancels an NFT auction 



#### Parameters

| Name | Type | Description |
|---|---|---|
| auctionID | uint256 | ID of auction to be cancelled

### claimFunds

```solidity
function claimFunds(uint256 auctionID, address recipient) external nonpayable
```

bidders who didn&#39;t win can claim their funds back if this function is turned on or owner can claim NFT back if auction is cancelled



#### Parameters

| Name | Type | Description |
|---|---|---|
| auctionID | uint256 | ID of auction for NFT
| recipient | address | address of bidder for refund

### claimNFT

```solidity
function claimNFT(uint256 auctionID, address recipient) external nonpayable
```

claims NFT for winner after successful acution or for seller if the auction was cancelled



#### Parameters

| Name | Type | Description |
|---|---|---|
| auctionID | uint256 | ID of auction
| recipient | address | address to claim NFT to

### claimableSellerFunds

```solidity
function claimableSellerFunds(address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### claimed

```solidity
function claimed(uint256) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### createAuction

```solidity
function createAuction(Auction.Auction _auction) external nonpayable returns (uint256)
```

creates NFT auction with given parameters



#### Parameters

| Name | Type | Description |
|---|---|---|
| _auction | Auction.Auction | object, contains parameters for auction creation

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getAuctionDetails

```solidity
function getAuctionDetails(uint256 auctionID) external view returns (struct Auction.Auction)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| auctionID | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | Auction.Auction | undefined

### getBidDetails

```solidity
function getBidDetails(uint256 auctionID, address bidder) external view returns (struct Auction.Bid)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| auctionID | uint256 | undefined
| bidder | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | Auction.Bid | undefined

### getBidderRefundBalance

```solidity
function getBidderRefundBalance(address account) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getClaimableSellerFunds

```solidity
function getClaimableSellerFunds(address account) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getHighestBidder

```solidity
function getHighestBidder(uint256 auctionID) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| auctionID | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### isAuctionActive

```solidity
function isAuctionActive(uint256 auctionID) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| auctionID | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### moveFundsOutOfContract

```solidity
function moveFundsOutOfContract(address to, uint256 amount, uint256 depositToAave) external nonpayable
```

moves funds out of contract to treasury or a given wallet



#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | address of treasury or wallet to move funds to
| amount | uint256 | undefined
| depositToAave | uint256 | amount to deposit to Aave, this amount can&#39;t be zero

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### setDAOWalletAddress

```solidity
function setDAOWalletAddress(address _DAOWallet) external nonpayable
```

sets DAO wallet address for transfering funds



#### Parameters

| Name | Type | Description |
|---|---|---|
| _DAOWallet | address | address of DAO wallet

### setTreasuryAddress

```solidity
function setTreasuryAddress(address _treasuryAddress) external nonpayable
```

sets Treasury address for transfering funds



#### Parameters

| Name | Type | Description |
|---|---|---|
| _treasuryAddress | address | address of Treasury contract

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined

### treasuryAddress

```solidity
function treasuryAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined



## Events

### AuctionCancelled

```solidity
event AuctionCancelled(uint256 auctionID)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| auctionID  | uint256 | undefined |

### AuctionCreated

```solidity
event AuctionCreated(address owner, uint256 startTime, uint256 endTime, uint256 tokenID, uint256 reservePrice)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner  | address | undefined |
| startTime  | uint256 | undefined |
| endTime  | uint256 | undefined |
| tokenID  | uint256 | undefined |
| reservePrice  | uint256 | undefined |

### BidPlaced

```solidity
event BidPlaced(uint256 auctionId, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| auctionId  | uint256 | undefined |
| amount  | uint256 | undefined |

### BidderRefundClaimed

```solidity
event BidderRefundClaimed(address recipient, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| recipient  | address | undefined |
| amount  | uint256 | undefined |

### DAOWalletAddressSet

```solidity
event DAOWalletAddressSet(address walletAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| walletAddress  | address | undefined |

### NFTClaimedByOwner

```solidity
event NFTClaimedByOwner(uint256 auctionID, address recipient, uint256 tokenID)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| auctionID  | uint256 | undefined |
| recipient  | address | undefined |
| tokenID  | uint256 | undefined |

### NFTClaimedByWinner

```solidity
event NFTClaimedByWinner(uint256 auctionID, address recipient, uint256 tokenID)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| auctionID  | uint256 | undefined |
| recipient  | address | undefined |
| tokenID  | uint256 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### SellerFundsClaimed

```solidity
event SellerFundsClaimed(address recepient, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| recepient  | address | undefined |
| amount  | uint256 | undefined |

### TreasuryAddressSet

```solidity
event TreasuryAddressSet(address treasury)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| treasury  | address | undefined |



## Errors

### AuctionAlreadyEnded

```solidity
error AuctionAlreadyEnded()
```






### AuctionHasEnded

```solidity
error AuctionHasEnded()
```






### AuctionHasNotEnded

```solidity
error AuctionHasNotEnded()
```






### AuctionHasNotStarted

```solidity
error AuctionHasNotStarted()
```






### AuctionInactive

```solidity
error AuctionInactive()
```






### AuctionNeedsToEndInFuture

```solidity
error AuctionNeedsToEndInFuture()
```






### AuctionStillActive

```solidity
error AuctionStillActive()
```






### BidNotHighEnough

```solidity
error BidNotHighEnough()
```






### BidTooLow

```solidity
error BidTooLow()
```






### CannotCancelAuction

```solidity
error CannotCancelAuction()
```






### CannotClaimFunds

```solidity
error CannotClaimFunds()
```






### CannotClaimNFT

```solidity
error CannotClaimNFT()
```






### DoesNotOwnNFT

```solidity
error DoesNotOwnNFT()
```






### IncorrectTimesGiven

```solidity
error IncorrectTimesGiven()
```






### InsufficientBalanceToClaim

```solidity
error InsufficientBalanceToClaim()
```






### InsufficientBalanceToMove

```solidity
error InsufficientBalanceToMove()
```






### NFTAlreadyClaimed

```solidity
error NFTAlreadyClaimed()
```






### NoFundsToMove

```solidity
error NoFundsToMove()
```






### OnlyNFTOwnerCanMoveFunds

```solidity
error OnlyNFTOwnerCanMoveFunds()
```






### OnlyRegisteredNFT

```solidity
error OnlyRegisteredNFT()
```






### OnlyWalletOrTreasury

```solidity
error OnlyWalletOrTreasury()
```






### SellerCannotBid

```solidity
error SellerCannotBid()
```






### ZeroAddressNotAllowed

```solidity
error ZeroAddressNotAllowed()
```







