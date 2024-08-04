const { ethers, upgrades } = require("hardhat");

async function main() {
  const VendingMachineV1 = await ethers.getContractFactory("VendingMachineV1");
  const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
  await proxy.waitForDeployment();

  const proxyAddress = await proxy.getAddress();
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("Proxy contract address: " + proxyAddress);

  console.log("Implementation contract address: " + implementationAddress);
}

main();
