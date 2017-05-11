// Importa a classe CarroDB
const CarroDB = require('./CarroDB');

// Objeto carro em JSON
var carro = { nome: "Meu Carro BD" , tipo : "esportivos"};

CarroDB.save(carro, function (carro) {
	// Imprime os dados do carro
	console.log("Carro Salvo: " + carro.id + ": " + carro.nome);
});