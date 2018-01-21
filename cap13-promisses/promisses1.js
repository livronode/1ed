const CarroDB = require('./model/CarroDB');

function teste() {
    // callback
    CarroDB.getCarros(function (error,carros) {
        console.log(JSON.stringify(carros) )
    })
}

teste();

