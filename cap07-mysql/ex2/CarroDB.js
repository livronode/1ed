var mysql = require('mysql');

// Classe CarroDB
class CarroDB {
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
	// Retorna a lista de carros
	static getCarros(callback) {
		let connection = CarroDB.connect()
		// Cria uma consulta
		let sql = "select * from carro";
		let query = connection.query(sql, function (error, results, fields) {
			if (error) throw error;
			// Retorna os dados pela função de callback
			callback(results)
		});
		console.log(query.sql)
		// Fecha a conexão.
		connection.end();
	}
	// Retorna a lista de carros por tipo do banco de dados
	static getCarrosByTipo(tipo, callback) {

		let connection = CarroDB.connect()
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
	// Retorna a lista de carros
	static getCarroById(id, callback) {
		let connection = CarroDB.connect()
		// Cria uma consulta
		let sql = "select * from carro where id=?";
		let query = connection.query(sql, id, function (error, results, fields) {
			if (error) throw error;
			if(results.length == 0) {
				console.log("Nenhum carro encontrado.")
				return
			}
			// Encontrou o carro
			let carro = results[0];
			// Retorna o carro pela função de callback
			callback(carro)
		});
		console.log(query.sql)
		// Fecha a conexão.
		connection.end();
	}
	// Salva um carro no banco de dados.
	// Recebe o JSON com dados do carro como parâmetro.
	static save(carro, callback) {

		let connection = CarroDB.connect()

		// Insere o carro
		let sql = "insert into carro set ? ";
		let query = connection.query(sql, carro, function (error, results, fields) {
			if (error) throw error;
			// Atualiza o objeto carro do parametro com o "id" inserido
			carro.id = results.insertId;
			// Retorna o carro pela função de callback
			callback(carro)
		});
		console.log(query.sql)
		// Fecha a conexão.
		connection.end();
	}
	// Atualiza um carro no banco de dados.
	static update(carro, callback) {

		let connection = CarroDB.connect()

		// SQL para atualizar o carro
		let sql = "update carro set ? where id = ?";
		// Id do carro para atualizar
		let id = carro.id;
		let query = connection.query(sql, [carro, id], function (error, results, fields) {
			if (error) throw error;
			callback(carro)
		});
		console.log(query.sql)
		// Fecha a conexão.
		connection.end();
	}
	// Deleta um carro no banco de dados.
	static delete(carro, callback) {

		let connection = CarroDB.connect()

		// SQL para deletar o carro
		let sql = "delete from carro where id = ?";
		// Id do carro para deletar
		let id = carro.id;
		let query = connection.query(sql, id, function (error, results, fields) {
			if (error) throw error;
			callback(carro)
		});
		console.log(query.sql)
		// Fecha a conexão.
		connection.end();
	}
};

module.exports = CarroDB;
