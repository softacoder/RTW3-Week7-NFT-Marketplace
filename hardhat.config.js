require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require("fs");
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    //   goerli: {
    //     url: "<YOUR_ALCHEMY_URL>",
    //     accounts: [ "<YOUR_PRIVATE_KEY>" ]
    //   }
    // },
    seopolia: {
      url: QOdK5x63pvFttVBF5gyyhFBGjBF2Rc_V,
      accounts: ["<YOUR_PRIVATE_KEY>"], // I have not put in mine because it would become public at this stage
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
