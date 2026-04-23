require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/pg-GZKKxXDzwQ5NH5qAFhQQO2OXV6mkL',
      accounts: ['4479437bc975ca587a7be4ffc507eb2a7ae877532b12979b043543a8816d3192'],
    },
  },
};