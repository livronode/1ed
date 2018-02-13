// Importa a biblioteca do Mongo
let db = require('./mongodb');
// Objeto usado como id no mongo
let ObjectId = require('mongodb').ObjectID;

// Classe CarroDB
class CarroDB {

    // Retorna a lista de carros
    static getCarros() {
        return new Promise(function (resolve, reject) {
            let carros = db.get().collection('carros');
            carros.find({}).toArray(function(error, result) {
                if (error) return reject(error);
                resolve(result);
            });
        });
    }

	// Retorna a lista de carros por tipo do banco de dados
	static getCarrosByTipo(tipo) {
        return new Promise(function (resolve, reject) {
            let carros = db.get().collection('carros');
            carros.find({"tipo":tipo}).toArray(function(error, result) {
                if (error) return reject(error);
                resolve(result);
            });
        });
	}
    // Retorna o carro pelo id 
	static getCarroById(id) {
        return new Promise(function (resolve, reject) {
            let carros = db.get().collection('carros');
            carros.findOne({"_id":ObjectId(id)},function(error, result) {
                console.log(error);
                console.log(result);
                if (error) return reject(error);
                resolve(result);
            });
        });
	}
	// Salva um carro no banco de dados.
	// Recebe o JSON com dados do carro como parâmetro.
	static save(carro) {
        return new Promise(function (resolve, reject) {
            let carros = db.get().collection('carros');
            carros.insert(carro, function (error, response) {
                if(error) {
                    reject(error);
                } else {
                    resolve(carro);
                }
            });
        });
	}

	// Atualiza um carro no banco de dados.
	static update(carro) {
        return new Promise(function (resolve, reject) {
            let carros = db.get().collection('carros');
            // Salva o id do carro em uma variável
            let id = carro._id;
            // Remove o id do JSON
            delete carro._id;
            // Atualiza o carro pelo id
            carros.update( {"_id":ObjectId(id)} ,carro, function (error, response) {
                if(error) {
                    reject(error);
                } else {
                    resolve(carro);
                }
            });
        });
	}

	// Deleta um carro pelo id.
	static deleteById(id) {
        return new Promise(function (resolve, reject) {
            let carros = db.get().collection('carros');
            carros.removeOne({"_id":ObjectId(id)},function(error, r) {
                if (error) return reject(error);
                // Retorna a qtde de registros deletados
                resolve(r.result.n);
            });
        });
	}
}

module.exports = CarroDB;
