require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    bsctestnet: {
      url: `${process.env.URL}`,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: `${process.env.BSC_KEY}`
  }
};