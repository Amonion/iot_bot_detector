require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/9fe2deee5ff6497cb60e57cf539aa27c`,
      accounts: [
        `0x2496812aa74efdb716f91f28f66b138d678cea9d2335a5f2fe5f6fc37ac63f6b`,
      ],
    },
  },

  solidity: "0.8.24",
};
