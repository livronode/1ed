var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configura para ler dados do POST por form-urlencoded e application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configura uma rota na raiz.
app.get('/', function (req, res) {
	res.send("API dos Carros");
})

// Teste de Erro
app.get('/teste_erro', function (req, res) {
	throw Error('Erro Ninja');
})

// Rotas
app.use('/api', require('./routes/carros'));

// Rota para não encontrado '404'
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);

  res.status(404)
  res.json({ err: "Not Found" });
});

// Rota genérica de erro '500'
// app.use(function(err, req, res, next) {
// 	console.error(err.stack);
// 	res.status(500).send('Ocorreu um erro');
// 	//res.status(err.status || 500).json({ err: err.message });
// });

// Inicia o servidor
var server = app.listen(3000, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
})
