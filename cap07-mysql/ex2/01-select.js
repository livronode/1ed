// Importa a classe CarroDB
const CarroDB = require('./CarroDB');

var callback = function (carros) {
	// Imprime os carros
	for(let i = 0; carros.length > i; i++) {
  		console.log(carros[i].id + ": " + carros[i].nome);
  	}
};

CarroDB.getCarros(callback);