const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8266c4d1a21a9d0039cd1bd9a57145a3&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}