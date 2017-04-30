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
	// Retorna a lista de carros por tipo do banco de dados
	static getCarros(tipo, callback) {

		let connection = CarroRepository.connect()
		// Cria uma consulta
		let sql = "select id,nome,tipo from carro where tipo = '" + tipo + "'";
		let query = connection.query(sql, function (error, results, fields) {
			if (error) throw error;
			// Retorna os dados pela função de callback
			callback(results)
		});
		console.log(query.sql)
		// Fecha a conexão.
		connection.end();
	}
	// Salva um carro no banco de dados.
	// Recebe o JSON com dados do carro como parâmetro.
	static save(carro, callback) {

		let connection = CarroRepository.connect()

		//var carro = {nome:"Novo Carro",tipo:"esportivos"};

		// Cria uma consulta
		let sql = "insert into carro set ? ";
		let query = connection.query(sql, carro, function (error, results, fields) {
			if (error) throw error;
			// Retorna os dados pela função de callback
			console.log("SAVE OK, id: " + results.insertId)
			carro.id = results.insertId;
			callback(carro)
		});
		console.log(query.sql)
		// Fecha a conexão.
		connection.end();
	}
	// Atualiza um carro no banco de dados.
	static update(carro, callback) {

		let connection = CarroRepository.connect()

		//var carro = {nome:"Novo Carro",tipo:"esportivos"};

		// Cria uma consulta
		let sql = "update carro set ? ";
		let query = connection.query(sql, carro, function (error, results, fields) {
			if (error) throw error;
			// Retorna os dados pela função de callback
			console.log("Update OK, id: " + results.insertId)
			carro.id = results.insertId;
			callback(carro)
		});
		console.log(query.sql)
		// Fecha a conexão.
		connection.end();
	}
};
