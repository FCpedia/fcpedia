const axios = require('axios')

const axiosAPI = axios.create({
    baseURL: 'https://api.football-data.org/v2/',
    headers: {'X-Auth-Token': process.env.FOOTBALL_API},
    method: 'get'
});

module.exports = axiosAPI