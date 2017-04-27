// Carrega o módulo net
var net = require('net');

// Cria o servidor TCP
var server = net.createServer(function (socket) {
	
	// Mensagem de log quando algum cliente conectar
	console.log("Cliente conectou do IP: " + socket.remoteAddress);

	// Escreve a resposta e termina a conexão do cliente.
	socket.end("Hello World TCP!\n");
});

// Inicia o servidor
server.listen(3000, "localhost");

// Mensagem ao iniciar o servidor
console.log("Servidor iniciado...");
