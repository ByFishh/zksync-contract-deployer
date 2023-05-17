// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    uint256 initialSupply;

    constructor(string memory name_, string memory symbol_) ERC20(name_, symbol_) {
        initialSupply = 10_000_000 * (10 ** 18);
        _mint(msg.sender, initialSupply);
    }
}
