// Importa a classe CarroRepository
const CarroRepository = require('./CarroRepository');

CarroRepository.getCarros(function (carros) {
	// Imprime os carros
	for(let i = 0; carros.length > i; i++) {
  		console.log(carros[i].id + ": " + carros[i].nome);
  	}
});