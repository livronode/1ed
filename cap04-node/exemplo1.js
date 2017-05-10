// Carrega o módulo HTTP
var http = require('http');

// Cria um servidor HTTP que vai responder "Hello World" para todas requisições.
var server = http.createServer(function (request, response) {
	// Define o cabeçalho (header) com o tipo da resposta
	response.writeHead(200, {"Content-Type": "text/plain"});

	// Mensagem de retorno
	response.end("Hello World Node!\n");
});

// Porta que o servidor vai escutar
server.listen(3000);

// Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");