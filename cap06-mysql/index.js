// Carrega os módulos
var http = require('http');
var url  = require('url');

const CarroRepository = require('./CarroRepository');

// Retorna o JSON de uma lista de carros.
function getCarros(response,tipo) {

	// Chama a classe que faz a consulta no banco
	// Recebe o retorno por meio da função de callback
	CarroRepository.getCarros("classicos", function(carros) {
		// Converte o array de carros para JSON
		var json = JSON.stringify(carros)
	
		// Envia o JSON como resposta
	    response.end(json)
	});
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
		getCarros(response,"esportivos")
	} else if (path == '/carros/luxo') {
		getCarros(response,"luxo")
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
