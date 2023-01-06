const { expect } = require("chai");
const hre = require("hardhat");

before('Get factories', async function() {
    this.Token1 = await hre.ethers.getContractFactory('MyUpgradeableERC20V1')
    this.Token2 = await hre.ethers.getContractFactory('MyUpgradeableERC20V2')
})

it('Deploy token V1 and upgrade to V2', async function() {
    // Deploy token
    const tokenV1 = await hre.upgrades.deployProxy(this.Token1, {kind: 'uups'})

    const tokenV2 = await hre.upgrades.upgradeProxy(tokenV1.address, this.Token2)

    expect(await tokenV1.name() === 'My Upgradeable Token', 'V1 token not deployed')
    expect(await tokenV2.version() === 'version 2')
})