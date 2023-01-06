const {ethers, upgrades} = require("hardhat");

async function main() {
  
  const TokenV1 = await ethers.getContractFactory("MyUpgradeableERC20V1");
  const tokenV1 = await upgrades.deployProxy(TokenV1, [], {
    kind: 'uups',
    initializer: "initialize",
  })
  await tokenV1.deployed();

  console.log( `TokenV1 address deployed to ${tokenV1.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
