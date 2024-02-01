const axios = require('axios');
const mapArrToStrings = require('../mapArrToStrings/mapArrToStrings');

const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return mapArrToStrings(response.data.map(user => user.id));
    } catch (e) {
        console.log(e);
    }
}

module.exports = getData;
