var express = require('express');
const router = express.Router();
const CarroRepository = require('../repository/CarroRepository');

// Configura uma rota na raiz.
router.get('/', function (req, res) {
	res.send("API dos Carros");
})

// GET em /carros
router.get('/carros', function (req, res) {
	CarroRepository.getCarros(function(carros) {
		res.json(carros)
	});
})

// GET em /carros/id
router.get('/carros/:id(\\d+)', function (req, res) {
	let id = req.params.id;
	CarroRepository.getCarroById(id, function(carro) {
		res.json(carro)
	});
})
// DELETE em /carros/id
router.delete('/carros/:id(\\d+)', function (req, res) {
	let id = req.params.id;
	console.log("deletar arro " + id);
	CarroRepository.deleteById(id, function(affectedRows) {
		res.json ({ msg: 'Carro deletado com sucesso.' })
	});
})

// GET em /carros/xxx
router.get('/carros/:tipo', function (req, res) {
	let tipo = req.params.tipo;
	CarroRepository.getCarrosByTipo(tipo, function(carros) {
		res.json(carros)
	});
})
// POST para salvar um carro
router.post('/carros', function (req, res) {
	// Carro enviado no formato JSON
	let carro = req.body;
	CarroRepository.save(carro, function(carro) {
		res.json(carro)
	});
})
// PUT para atualizar um carro
router.put('/carros', function (req, res) {
	// Carro enviado no formato JSON
	let carro = req.body;
	CarroRepository.update(carro, function(carro) {
		// res.json(carro)
		res.json ({ msg: 'Carro atualizado com sucesso.' })
	});
})

module.exports  = router;
