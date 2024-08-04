const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("VendingMachineV1", (m) => {
  //   const num = m.getParameter("_numSodas", 1000);

  const machine = m.contract("VendingMachineV1", [1000]);

  return { machine };
});
