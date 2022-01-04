//https://eth-ropsten.alchemyapi.io/v2/ZwkIBBX0Hl5sZKERgTtz3nRDjcReIedm
//602939657ffa60e43d180e3e0001c3edca370e1058a570388f0fdac04f92cc1e
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/ZwkIBBX0Hl5sZKERgTtz3nRDjcReIedm",
      accounts: [
        "602939657ffa60e43d180e3e0001c3edca370e1058a570388f0fdac04f92cc1e",
      ],
    },
  },
};
