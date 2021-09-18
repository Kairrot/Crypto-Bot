const polygonscan = require('./api/polygonscan');

async function getABI(address) {
    var abi = await polygonscan.getABI(address)

    if(abi.find(a => a.name === 'implementation')) {
        const implementation = await readMethod(address, 'implementation', [], abi);

        abi = await polygonscan.getABI(implementation)
    }
    return abi;
}

async function readMethod(address, method, args, abi = null) {
    const contract = new global.web3.eth.Contract((abi) ? abi : await getABI(address), address);

    return await contract.methods[method](...args).call();
}

async function writeMethod(address, method, args, abi = null) {
    const contract = new global.web3.eth.Contract((abi) ? abi : await getABI(address), address);

    return contract.methods[method](...args).encodeABI();
}

module.exports = {
    getABI,
    readMethod,
    writeMethod,
}