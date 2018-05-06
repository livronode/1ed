let express = require('express');
const router = express.Router();
const CarroDB = require('../model/CarroDB');

// GET em /
router.get('/', function (req, res) {
	CarroDB.getCarros(function(carros) {
		res.json(carros)
	});
});

// GET em /id
router.get('/:id(\\d+)', function (req, res) {
	let id = req.params.id;
	CarroDB.getCarroById(id, function(carro) {
		res.json(carro)
	});
});

// DELETE em /id
router.delete('/:id(\\d+)', function (req, res) {
	let id = req.params.id;
	console.log("deletar arro " + id);
	CarroDB.deleteById(id, function(affectedRows) {
		res.json ({ msg: 'Carro deletado com sucesso.' })
	});
});

// GET em /tipo (classicos, esportivos, luxo)
router.get('/:tipo', function (req, res) {
	let tipo = req.params.tipo;
	CarroDB.getCarrosByTipo(tipo, function(carros) {
		res.json(carros)
	});
});

// POST para salvar um carro
router.post('/', function (req, res) {
	// Carro enviado no formato JSON
	let carro = req.body;
	CarroDB.save(carro, function(carro) {
		res.json(carro)
	});
});

// PUT para atualizar um carro
router.put('/', function (req, res) {
	// Carro enviado no formato JSON
	let carro = req.body;
	CarroDB.update(carro, function(carro) {
		// res.json(carro)
		res.json ({ msg: 'Carro atualizado com sucesso.' })
	});
});

module.exports  = router;
