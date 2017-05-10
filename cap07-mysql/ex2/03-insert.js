// Importa a classe CarroRepository
const CarroRepository = require('./CarroRepository');

// Objeto carro em JSON
var carro = { nome: "Meu Carro BD" , tipo : "esportivos"};

CarroRepository.save(carro, function (carro) {
	// Imprime os dados do carro
	console.log("Carro Salvo: " + carro.id + ": " + carro.nome);
});