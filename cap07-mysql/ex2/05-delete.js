// Importa a classe CarroDB
const CarroDB = require('./CarroDB');

// Objeto carro em JSON
var carro = { id:33};

CarroDB.delete(carro, function (carro) {
	// Imprime os dados do carro
	console.log("Carro Deletado: " + carro.id);
});