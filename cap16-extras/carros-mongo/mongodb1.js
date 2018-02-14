let MongoClient = require('mongodb').MongoClient;

// URL de conexão
let mongoServer = 'mongodb://localhost:27017/';

// Conecta no servidor do MongoDB
MongoClient.connect(mongoServer, function(err, client) {
    if (err) return callback(err);

    // Seleciona o banco de dados 'livro'
    let db = client.db('livro');

    // Seleciona a collection (lista) dos carros
    let carros = db.collection('carros');

    // Busca todos os carros
    carros.find({}).toArray(function(error, results) {

        // Percorre o array e imprime o nome de cada carro
        for(let carro of results) {
            console.log(carro)
        }
    });
});