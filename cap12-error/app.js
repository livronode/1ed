var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configura para ler dados do POST por form-urlencoded e application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// Rota na raiz.
app.get('/', function (req, res) {
	res.send("API dos Carros");
})

// Rotas
app.use('/api', require('./routes/carros'));

// Teste de Erro
app.get('/teste_erro', function (req, res) {
	throw Error('Erro Ninja');
})

// Rota para não encontrado '404'
app.use(function(req, res, next) {
  res.status(404)
  res.json({ err: "Não encontrado" });
});

// Rota genérica de erro '500'
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
  	res.json({ erro: "Ocorreu um erro: " + err.message });
});

// Inicia o servidor
var server = app.listen(3000, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
})
