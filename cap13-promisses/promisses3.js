const CarroDB = require('./model/CarroDB');

async function teste() {
    let carros = await CarroDB.getCarros();
    console.log(JSON.stringify(carros) )
}

teste();

