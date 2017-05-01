// Carrega os módulos
var http = require('http');
var url = require('url');
// Importa a classe CarroRepository
const CarroRepository = require('./CarroRepository');
// Consulta os carros pelo tipo e retorna o JSON na resposta.
function getCarros(response,tipo) {
	// Busca os carros no banco.
	CarroRepository.getCarrosByTipo(tipo, function(carros) {
		// Converte o array de carros para JSON
		var json = JSON.stringify(carros)
		// Envia o JSON como resposta
	    	response.end(json)
	});
}
// Salva um carro
function salvarCarro(response,carro) {
	CarroRepository.save(carro, function(carro) {
		console.log("Carro salvo com sucesso: " + carro.id)
		// Converte o carro salvo para JSON
		var json = JSON.stringify(carro)
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
	if(request.method == "GET") {
		// GET
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
	} else if(request.method == "POST") {
		// POST
		// Faz leitura dos dados recebidos por POST
		var body = '';
		request.on('data', function (data) {
			// Concatena os dados recebidos na variável body
			body += data;
		});
		request.on('end', function () {
			// Imprime o corpo (body) da requisição
			console.log(">> " + body);
			let carro = JSON.parse(body);
			console.log(carro)
			salvarCarro(response, carro);
		});
		return
	}
}
// Cria um servidor HTTP que vai responder "Hello World" para todas requisições.
var server = http.createServer(callback);
// Porta que o servidor vai escutar
server.listen(3000);
// Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");
