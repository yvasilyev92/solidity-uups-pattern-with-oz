// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract MyUpgradeableERC20V1 is Initializable, ERC20Upgradeable, UUPSUpgradeable, OwnableUpgradeable {

    function initialize() external initializer {
        __ERC20_init("My Upgradeable Token", "MUE");
        _mint(msg.sender, 10000000 * 10 ** decimals());
        __Ownable_init();
    }

    // Openzeppelin UUPSUpgradeable contains an 'upgradeTo()' function that calls _authorizeUpgrade() however you must put auth protection
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

}
