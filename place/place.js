// Importamos el Axios
const axios = require("axios");

const getLugarLatLng = async (dir) => {

  // encodeURI hace que desaparezcan los espacios y trabaje una url segura
  const encodedUrl = encodeURI(dir);

  // Incluimos el KEY en el header
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: {
      "X-RapidAPI-Key": "ddd2f93abamsh992b58f86e248b7p17eab4jsn9affbb7f4612",
    },
  });

  const resp = await instance.get();

  if(resp.data.Results.length === 0){
      throw new Error(`No hay resultados para ${dir}`);
  } 

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

    return {
        direccion, 
        lat, 
        lng
    }
}

module.exports = {
    getLugarLatLng
}
