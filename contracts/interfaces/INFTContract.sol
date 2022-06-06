pragma solidity 0.8.11;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

interface INFTContract {
    function ownerOf(uint256 tokenId) external returns (address);

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;
}
