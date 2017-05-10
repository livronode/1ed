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

// SQL para excluir o carro
let sql = "delete from carro where id = ?";

let id = 31;

connection.query(sql , id, function (error, results, fields) {
	if (error) throw error;

	console.log("Carro deletado com sucesso.");
	console.log("Qtde de registros atualizados: " + results.affectedRows)

});

// Fecha a conexão.
connection.end();