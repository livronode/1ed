var mysql = require('mysql');

// Classe CarroRepository
module.exports = class CarroRepository {
	// Função para conectar no banco de dados.
	static connect() {
		// Cria a conexão com MySQL
		var connection = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'livro',
		  password : 'livro123',
		  database : 'livro'
		});
		// Conecta no banco de dados	
		connection.connect();
		return connection;
	}
	// Retorna o JSON de uma lista de carros.
	static getCarros(response,tipo) {
		

		let connection = CarroRepository.connect()
		// Cria uma consulta
		let sql = "select id,nome,tipo from carro where tipo = '" + tipo + "'";
		let query = connection.query(sql, function (error, results, fields) {
			if (error) throw error;
			var carros = results;
			// Converte o array de resultados para JSON
			var json = JSON.stringify(carros)  
			  // Envia o JSON como resposta
		  	response.end(json)
		});
		console.log(query.sql)
		// Fecha a conexão.
		connection.end();
	} 
};
