// Importa a classe CarroRepository
const CarroRepository = require('./CarroRepository');

// Objeto carro em JSON
var carro = { id:33};

CarroRepository.delete(carro, function (carro) {
	// Imprime os dados do carro
	console.log("Carro Deletado: " + carro.id);
});