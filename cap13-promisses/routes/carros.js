var express = require('express');
const router = express.Router();
const CarroDB = require('../model/CarroDB');
const exec = require('./utils');

// GET em /carros
router.get('/carros', exec(async (req, res, next) => {
    let carros = await CarroDB.getCarros();
    res.json(carros);
}));

// GET em /carros/id
router.get('/carros/:id(\\d+)', exec(async (req, res, next) => {
    let id = req.params.id;
    let carro = await CarroDB.getCarroById(id);
    res.json(carro)
}));

// DELETE em /carros/id
router.delete('/carros/:id(\\d+)', exec(async (req, res, next) => {
    let id = req.params.id;
    let affectedRows = await CarroDB.deleteById(id);
    res.json({msg: affectedRows > 0 ? 'Carro deletado com sucesso.' : "Nenhum carro excluído."});
}));

// GET em /carros/xxx
router.get('/carros/:tipo', exec(async (req, res, next) => {
    let tipo = req.params.tipo;
    let carros = await CarroDB.getCarrosByTipo(tipo);
    res.json(carros);
}));

// POST para salvar um carro
router.post('/carros', exec(async (req, res, next) => {
    // Carro enviado no formato JSON
    let carro = await CarroDB.save(req.body);
    res.json(carro);
}));

// PUT para atualizar um carro
router.put('/carros', exec(async (req, res, next) => {
    // Carro enviado no formato JSON
    let carro = await CarroDB.update(req.body);
    res.json({msg: 'Carro atualizado com sucesso.'});
}));

module.exports = router;