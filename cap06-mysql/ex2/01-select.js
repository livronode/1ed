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

// Cria uma consulta
let sql = "select id,nome,tipo from carro";

connection.query( sql , function (error, results, fields) {
	if (error) throw error;

	let carros = results;

  	// Exemplo 1 para fazer for
  	for(let i = 0; carros.length > i; i++) {
  		console.log(carros[i].id + ": " + carros[i].nome);
  	}

	// Exemplo 2 para fazer for
	for(let i in carros) {
		let c = carros[i];
		console.log(c.id + ": " + c.nome);
	}

	// Exemplo 3: Função map do JavaScript
	//carros.map(c => console.log(c.id + ": " + c.nome));
});

// Fecha a conexão.
connection.end();