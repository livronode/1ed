var express = require('express');
var app = express();
const CarroRepository = require('./CarroRepository');
var bodyParser = require('body-parser');
// Configura para ler dados do POST por form-urlencoded e application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Configura uma rota na raiz.
app.get('/', function (req, res) {
	res.send("API dos Carros");
})
// GET em /carros
app.get('/carros', function (req, res) {
	CarroRepository.getCarros(function(carros) {
		res.json(carros)
	});
})
// GET em /carros/tipo/xxx
app.get('/carros/tipo/:tipo', function (req, res) {
	let tipo = req.params.tipo;
	CarroRepository.getCarrosByTipo(tipo, function(carros) {
		res.json(carros)
	});
})
// POST para salvar um carro
app.post('/carros', function (req, res) {
	// Carro enviado no formato JSON
	let carro = req.body;
	CarroRepository.save(carro, function(carro) {
		res.json(carro)
	});
})
// PUT para atualizar um carro
app.put('/carros', function (req, res) {
	// Carro enviado no formato JSON
	let carro = req.body;
	CarroRepository.update(carro, function(carro) {
		// res.json(carro)
		res.json ({ msg: 'Carro atualizado com sucesso.' })
	});
})
// GET em /carros/id
app.get('/carros/:id', function (req, res) {
	let id = req.params.id;
	CarroRepository.getCarroById(id, function(carro) {
		res.json(carro)
	});
})
// DELETE em /carros/id
app.delete('/carros/:id', function (req, res) {
	let id = req.params.id;
	console.log("deletar arro " + id);
	CarroRepository.deleteById(id, function(affectedRows) {
		res.json ({ msg: 'Carro deletado com sucesso.' })
	});
})

// Inicia o servidor
var server = app.listen(3000, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
})
