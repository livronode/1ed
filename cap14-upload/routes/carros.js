var express = require('express');
const router = express.Router();
const CarroDB = require('../model/CarroDB');
const exec = require('./utils');
var fs = require('fs');

// GET em 
router.get('/', exec(async (req, res, next) => {
    let carros = await CarroDB.getCarros();
    res.json(carros);
}));

// GET em /id
router.get('/:id(\\d+)', exec(async (req, res, next) => {
    let id = req.params.id;
    let carro = await CarroDB.getCarroById(id);
    res.json(carro)
}));

// DELETE em /id
router.delete('/:id(\\d+)', exec(async (req, res, next) => {
    let id = req.params.id;
    let affectedRows = await CarroDB.deleteById(id);
    res.json({msg: affectedRows > 0 ? 'Carro deletado com sucesso.' : "Nenhum carro excluído."});
}));

// GET em /xxx
router.get('/:tipo', exec(async (req, res, next) => {
    let tipo = req.params.tipo;
    let carros = await CarroDB.getCarrosByTipo(tipo);
    res.json(carros);
}));

// POST para salvar um carro
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

// Post para fazer upload em um arquivo.
router.post('/upload', exec(async (req, res, next) => {
    let fileName = req.body.fileName;
    let base64 = req.body.base64;
    console.log(fileName);
    console.log(base64);
    let buf = Buffer.from(base64, 'base64');
    console.log(buf);

    fs.writeFile("./fotos/"+fileName, buf,  "binary",function(err) {
        if(err) {
            next(err);
            res.json({msg: 'Erro ao salvar o arquivo.'});
        } else {
            res.json({msg: 'Arquivo recebido com sucesso.'});
        }
    });
}));

module.exports = router;