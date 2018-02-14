let express = require('express');
const router = express.Router();
const CarroDB = require('../model/CarroDB');
const exec = require('./utils');
let fs = require('fs');

// GET em /carros
router.get('/', exec(async (req, res, next) => {
    let carros = await CarroDB.getCarros();
    res.json(carros);
}));

// GET em /id
router.get('/id/:id', exec(async (req, res, next) => {
    let id = req.params.id;
    let carro = await CarroDB.getCarroById(id);
    res.json(carro)
}));

// DELETE em /id
router.delete('/id/:id', exec(async (req, res, next) => {
    let id = req.params.id;
    let affectedRows = await CarroDB.deleteById(id);
    console.log("affectedRows: " , affectedRows);
    res.json({msg: affectedRows > 0 ? 'Carro deletado com sucesso.' : "Nenhum carro excluído."});
}));

// GET em /xxx
router.get('/:tipo', exec(async (req, res, next) => {
    let tipo = req.params.tipo;
    let carros = await CarroDB.getCarrosByTipo(tipo);
    res.json(carros);
}));

// POST para sallet um carro
router.post('/', exec(async (req, res, next) => {
    // Carro enviado no formato JSON
    let carro = await CarroDB.save(req.body);
    res.json(carro);
}));

// PUT para atualizar um carro
router.put('/', exec(async (req, res, next) => {
    // Carro enviado no formato JSON
    let carro = await CarroDB.update(req.body);
    res.json({msg: 'Carro atualizado com sucesso.'});
}));

module.exports = router;