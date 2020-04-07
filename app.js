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
//     .then( console.log );

clima.getClima(40.6643,  -73.9385)
    .then(console.log)
    .catch(console.log);