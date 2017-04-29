var mysql = require('mysql');

// Classe CarroRepository
module.exports = class CarroRepository {

	// Retorna o JSON de uma lista de carros.
	static getCarros(response,tipo) {
		// Faz a leitura do arquivo de forma assíncrona
		// Cria a conexão com MySQL
		var connection = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'livro',
		  password : 'livro123',
		  database : 'livro'
		});

		// Conecta no banco de dados	
		connection.connect();

		// Cria uma consulta
		let sql = "select id,nome,tipo from carro where tipo = '" + tipo + "'";
		console.log(sql)

		connection.query(sql, function (error, results, fields) {
		  if (error) throw error;
		  
		  var carros = results;

		  // Converte o array de resultados para JSON
		  var json = JSON.stringify(carros)
		  
		  // Envia o JSON como resposta
		  response.end(json)
		});

		// Fecha a conexão.
		connection.end();
	} 
};