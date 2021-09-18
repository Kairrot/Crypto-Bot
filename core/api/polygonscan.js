const { default: axios } = require("axios");

const API_URL = 'https://api.polygonscan.com/api';

const getABI = async (address) => {
    const { data } = await axios.get(API_URL, {
        params: {
            module: 'contract',
            action: 'getabi',
            address,
            apiKey: global.env.POLYGONSCAN_KEY
        }
    })
    return JSON.parse(data.result);
}

module.exports = {
    getABI,
}