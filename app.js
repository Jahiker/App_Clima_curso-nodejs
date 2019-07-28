const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad a obtener el clima',
        demand: true
    }
}).argv;

//OBTENIENDO LAS CORDENADAS Y EL NOMBRE DE LA CIUDAD
//lugar.getlugarLatLng(argv.direccion)
//  .then(console.log);

//OBTENIENDO LA TEMPERATURA EN EL LUGAR DE LAS COORDENADAS
//clima.getClima(10.180000, -67.940002)
//   .then(console.log)
//   .catch(console.log);

const getInfo = async(direccion) => {
    try {
        let coord = await lugar.getlugarLatLng(direccion);
        let temp = await clima.getClima(coord.lat, coord.lng);
        return `La temperatura en ${direccion} es de ${temp}.`;
    } catch (error) {
        return `No se pudo determinar la temperatura en ${direccion}.`;
    }
}

/* CONEXION DE AMBAS FUNCIONES FORMA HECHA POR MI
const getInfo = async(direccion) => {
    let ciudad = await lugar.getlugarLatLng(direccion);
    if (!ciudad) {
        throw new Error(`No se encontro el sitio ${direccion}`);
    } else {
        let temp = await clima.getClima(ciudad.lat, ciudad.lng);
        if (!temp) {
            throw new Error(`No se pudo determinar el clima en ${ciudad.direccion}`);
        } else {
            console.log(`El clima en ${direccion} es de ${temp}`);
        }
    }
} */

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);