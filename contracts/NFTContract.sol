pragma solidity 0.8.11;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTContarct is ERC721 {
    constructor() ERC721("Artifact", "ART") {}

    function mint(address to, uint256 id) external {
        _mint(to, id);
    }
}
