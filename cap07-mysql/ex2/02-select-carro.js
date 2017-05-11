// Importa a classe CarroDB
const CarroDB = require('./CarroDB');

CarroDB.getCarroById(11, function (carro) {
	// Imprime os dados do carro
	console.log(carro.id + ": " + carro.nome);
});