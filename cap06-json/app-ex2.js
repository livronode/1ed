// Carrega os módulos
var http = require('http');
var url  = require('url')

// Função de callback para o servidor HTTP
function callback(request, response) {
	// Cabeçalho (header) com o tipo da resposta + UTF-8 como charset
	// response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
	// Faz o parser da URL separando o caminho (path)
	var parts = url.parse(request.url);
	var path = parts.path;

	// Configura o tipo de retorno para application/json
	response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

	// Verifica o path
	if (path == '/teste') {  
		// Cria um objeto em JavaScript
		var pessoa = { "nome":"Ricardo Lecheta", "sobrenome":"Lecheta"};

		// Converte o objeto para JSON
		json = JSON.stringify(pessoa);

		// Escreve o JSON na resposta (response) da requisição HTTP
		response.end(json);
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
