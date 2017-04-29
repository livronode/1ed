var mysql = require('mysql');

// Classe Pessoa
module.exports = function CarroService() {
		

	// Retorna o JSON de uma lista de carros.
	function getCarros(response,tipo) {
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

		  /*for(let i = 0; carros.length > i; i++) {
		  	console.log(carros[i].id + ": " + carros[i].nome);
		  }*/

		  /*for(let i in carros) {
		  		let c = carros[i];
				console.log(c.id + ": " + c.nome);
		  }*/

		  // carros.map(carro => console.log(carro.nome));

		  // Converte o array de resultados para JSON
		  var json = JSON.stringify(results)
		  
		  // Envia o JSON como resposta
		  response.end(json)
		});

		// Fecha a conexão.
		connection.end();
	} 
};