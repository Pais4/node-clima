const lugar = require('./place/place'); 
const clima = require('./clima/clima'); 

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// Una funcion Async siempre regresa una promesa
// lugar.getLugarLatLng( argv.direccion )
//      .then( console.log );

// clima.getClima(40.6643,  -73.9385)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async (direccion) => {

    try {
        const cord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(cord.lat, cord.lng);
        return `El clima de ${direccion} es de ${temp} ºC`;
    } catch (e) {
        return `No hay resultados para la ciudad ${direccion}` + e;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);