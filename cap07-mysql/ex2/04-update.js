// Importa a classe CarroDB
const CarroDB = require('./CarroDB');

// Objeto carro em JSON
var carro = { id:32, nome: "Meu Carro Update!" , tipo : "esportivos"};

CarroDB.update(carro, function (carro) {
	// Imprime os dados do carro
	console.log("Carro Atualizado: " + carro.id + ": " + carro.nome);
});