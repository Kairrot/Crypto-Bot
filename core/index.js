const { default: axios } = require('axios');
const fs = require('fs')
const Web3 = require('web3');

global.web3 = new Web3(global.env.NODE);

const contract = require('./contract');

contract.readMethod('0xc2132D05D31c914a87C6611C10748AEb04B58e8F', 'balanceOf', ['0x77a2629571800C5E99F41d1D3dEF4ed7d4Cd35a2']).then(console.log)

contract.writeMethod('0xc2132D05D31c914a87C6611C10748AEb04B58e8F', 'withdraw', []).then(console.log);