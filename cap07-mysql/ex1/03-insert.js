// Carrega o módulo do MySQL
var mysql      = require('mysql');

// Cria a conexão com MySQL
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'livro',
	password: 'livro123',
	database: 'livro'
});
// Conecta no banco de dados	
connection.connect();

// SQL para inserir o carro
let sql = "insert into carro set ? ";

// Objeto carro em JSON
var carro = { nome: "Meu Carro" , tipo : "esportivos"};

connection.query( sql , carro, function (error, results, fields) {
	if (error) throw error;

	console.log("Carro salvo com sucesso, id: " + results.insertId);

});

// Fecha a conexão.
connection.end();