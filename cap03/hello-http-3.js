// Carrega os módulos
var http = require('http');
var url  = require('url')
// Função de callback para o servidor HTTP
var callback = function (request, response) {
	// Cabeçalho (header) com o tipo da resposta + UTF-8 como charset
	response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
	// Faz o parser da URL separando o caminho (path)
	var parts = url.parse(request.url);
	// Verifica o path
	if(parts.path == '/') {  
		response.end("Site na raiz.");
	} else if(parts.path == '/carros') {
		response.end("Você digitou o path /carros.");
	} else {
		response.end("Path não mapeado: " + parts.path);
	}
}
// Cria um servidor HTTP que vai responder "Hello World" para todas requisições.
var server = http.createServer(callback);
// Porta que o servidor vai escutar
server.listen(3000);
// Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");
