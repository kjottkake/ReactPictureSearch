import axios from "axios";
const config = require('../components/config.json');

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: `Client-ID ${config.nokkel}` //hide yo keys hide yo wives.
    }
})