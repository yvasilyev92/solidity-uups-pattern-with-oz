// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "./MyUpgradeableERC20V1.sol";

contract MyUpgradeableERC20V2 is MyUpgradeableERC20V1 {

    function version() pure external returns(string memory) {
        return "version 2";
    }

}
