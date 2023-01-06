const {ethers, upgrades} = require("hardhat");

const proxyContract = process.env.PROXY;

async function main() {
  
  const TokenV2 = await ethers.getContractFactory("MyUpgradeableERC20V2");
  const tokenV2 = await upgrades.upgradeProxy(proxyContract, TokenV2)
  
  console.log( `TokenV2 upgraded to V2: ${tokenV2.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
