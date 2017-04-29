// Carrega os módulos
var http = require('http');
var url  = require('url')
var mysql = require('mysql');

const CarroRepository = require('./CarroRepository');

// Função de callback para o servidor HTTP
function callback(request, response) {
	// Faz o parser da URL separando o caminho (path)
	var parts = url.parse(request.url);
	var path = parts.path;

	// Configura o tipo de retorno para application/json
	response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

	// Verifica o path
	if (path == '/carros/classicos') {
		CarroRepository.getCarros(response, "classicos")
	} else if (path == '/carros/esportivos') {
		CarroRepository.getCarros(response, "esportivos")
	} else if (path == '/carros/luxo') {
		CarroRepository.getCarros(response, "luxo")
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
