const CarroDB = require('../model/CarroDB');

let assert = require('assert');

describe('CarroDB', function() {
    describe('#getCarros()', function() {
        it('Teste da busca de carros', async function() {
            let carros = await CarroDB.getCarros();
            assert.ok(carros.length > 0);
        });
    });
    describe('#save()', function() {
        it('Teste para Salvar um carro', async function() {
            let carro = {'nome':'Carro Teste','tipo':'classico'};
            let c = await CarroDB.save(carro);

            // Depois de salvar pega o id
            let id = c.id;

            // O carro salvo precisa ter id
            assert.ok(id > 0);
        });
    });
});