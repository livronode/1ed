// Importa a classe CarroRepository
const CarroRepository = require('./CarroRepository');

// Objeto carro em JSON
var carro = { id:32, nome: "Meu Carro Update!" , tipo : "esportivos"};

CarroRepository.update(carro, function (carro) {
	// Imprime os dados do carro
	console.log("Carro Atualizado: " + carro.id + ": " + carro.nome);
});