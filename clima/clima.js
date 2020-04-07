const axios = require("axios");

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e04efc3f5690d8b20ff95f7ea70a5864&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}