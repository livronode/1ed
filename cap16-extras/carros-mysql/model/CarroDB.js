let mysql = require('mysql');
let config = require('config');

// Classe CarroDB
class CarroDB {
	// Função para conectar no banco de dados.
	static connect() {

        // Configurações do MySQL
        let dbConfig = config.get('mysqlConfig');

		// Cria a conexão com MySQL
		let connection = mysql.createConnection(dbConfig);

		// Conecta no banco de dados	
		connection.connect();
		return connection;
	}

    // Retorna a lista de carros
    static getCarros() {
        return new Promise(function (resolve, reject) {
            let connection = CarroDB.connect();
            // Cria uma consulta
            let sql = "select * from carro";
            connection.query(sql, function (error, results, fields) {
                if (error) {
                    // Erro
                    reject(error);
                } else {
                    // Sucesso
                    resolve(results);
                }
            });
            // Fecha a conexão.
            connection.end();
        });
    }

	// Retorna a lista de carros por tipo do banco de dados
	static getCarrosByTipo(tipo) {
        return new Promise(function (resolve, reject) {
            let connection = CarroDB.connect();
            // Cria uma consulta
            let sql = "select id,nome,tipo from carro where tipo = '" + tipo + "'";
            connection.query(sql, function (error, results, fields) {
                if (error) {
                    // Erro
                    reject(error);
                } else {
                    // Sucesso
                    resolve(results);
                }
            });
            // Fecha a conexão.
            connection.end();
        });
	}
	// Retorna a lista de carros
	static getCarroById(id) {
        return new Promise(function (resolve, reject) {
            let connection = CarroDB.connect();
            // Cria uma consulta
            let sql = "select * from carro where id=?";
            connection.query(sql, id, function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    if(results.length == 0) {
                        reject(Error("Nenhum carro encontrado."));
                        return
                    }
                    // Encontrou o carro
                    let carro = results[0];
                    // Retorna o carro pela função de callback
                    resolve(carro);
                }
            });
            // Fecha a conexão.
            connection.end();
        });
	}
	// Salva um carro no banco de dados.
	// Recebe o JSON com dados do carro como parâmetro.
	static save(carro) {
        return new Promise(function (resolve, reject) {
            let connection = CarroDB.connect();
            // Insere o carro
            let sql = "insert into carro set ? ";
            connection.query(sql, carro, function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    // Atualiza o objeto carro do parametro com o "id" inserido
                    carro.id = results.insertId;
                    // Retorna o carro pela função de callback
                    resolve(carro);
                }
            });
            // Fecha a conexão.
            connection.end();
        });
	}
	// Atualiza um carro no banco de dados.
	static update(carro) {
        return new Promise(function (resolve, reject) {
            let connection = CarroDB.connect();
            // SQL para atualizar o carro
            let sql = "update carro set ? where id = ?";
            // Id do carro para atualizar
            let id = carro.id;
            connection.query(sql, [carro, id], function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve(carro);
                }
            });
            // Fecha a conexão.
            connection.end();
        });
	}
	// Deleta um carro no banco de dados.
	static delete(carro) {
        return new Promise(function (resolve, reject) {
            let connection = CarroDB.connect();

            // SQL para deletar o carro
            let sql = "delete from carro where id = ?";
            // Id do carro para deletar
            let id = carro.id;
            connection.query(sql, id, function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve(carro);
                }
            });
            // Fecha a conexão.
            connection.end();
        });
	}
	// Deleta um carro pelo id.
	static deleteById(id) {
        return new Promise(function (resolve, reject) {
            let connection = CarroDB.connect();

            // SQL para deletar o carro
            let sql = "delete from carro where id = ?";

            connection.query(sql, id, function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    // Retorna a qtde de registros deletados.
                    resolve(results.affectedRows)
                }
            });
            // Fecha a conexão.
            connection.end();
        });
	}
}

module.exports = CarroDB;
