let MongoClient = require('mongodb').MongoClient;

let mongoServer = 'mongodb://localhost:27017/';

let state = {
    db: null,
};

exports.connect = function(callback) {
    if (state.db) return callback();

    MongoClient.connect(mongoServer, function(err, client) {
        if (err) return callback(err);
        let db = client.db('livro');
        state.db = db;
        callback()
    })
};

exports.get = function() {
    return state.db
};

exports.close = function(done) {
    if (state.db) {
        state.db.close(function(err, result) {
            state.db = null;
            state.mode = null;
            done(err)
        })
    }
};

/*
MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
    if (err) return reject(error);
    let db = client.db('livro');

    let carros = db.collection('carros');

    carros.find({}).toArray(function(err, result) {
        if (err) return reject(error);
        resolve(result)
        //db.close();
    });
});*/