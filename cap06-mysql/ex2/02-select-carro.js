// Importa a classe CarroRepository
const CarroRepository = require('./CarroRepository');

CarroRepository.getCarroById(11, function (carro) {
	// Imprime os dados do carro
	console.log(carro.id + ": " + carro.nome);
});