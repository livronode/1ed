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

// SQL para atualizar o carro
let sql = "update carro set ? where id = ?";

// Objeto carro em JSON
var json = { id:31, nome: "Meu Carro Update" , tipo : "esportivos"};

let id = json.id;

connection.query( sql , [json, id], function (error, results, fields) {
	if (error) throw error;

	console.log("Carro atualizado com sucesso.");
	console.log("Qtde de registros atualizados: " + results.affectedRows)

});

// Fecha a conexão.
connection.end();