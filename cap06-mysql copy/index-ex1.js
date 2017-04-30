// Carrega os módulos
var http = require('http');
var url  = require('url')
var mysql = require('mysql');

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

// Função de callback para o servidor HTTP
function callback(request, response) {
	// Faz o parser da URL separando o caminho (path)
	var parts = url.parse(request.url);
	var path = parts.path;

	// Configura o tipo de retorno para application/json
	response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

	// Verifica o path
	if (path == '/carros/classicos') {
		getCarros(response, "classicos")
	} else if (path == '/carros/esportivos') {
		getCarros(response, "esportivos")
	} else if (path == '/carros/luxo') {
		getCarros(response, "luxo")
	} else {
		response.end("Not found: " + path);
	}
}
// Cria um servidor HTTP que vai responder "Hello World" para todas requisições.
var server = http.createServer(callback);
// Porta que o servidor vai escutar
server.listen(3000);
// Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");
