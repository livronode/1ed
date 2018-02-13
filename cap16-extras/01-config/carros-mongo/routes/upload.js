let express = require('express');
const router = express.Router();
const exec = require('./utils');
let fs = require('fs');

// Importa a classe do S3
const s3 = require('./s3');

// Post para fazer upload em um arquivo.
router.post('/', exec(async (req, res, next) => {
    // Le da request o nome do arquivo e o base64
    let fileName = req.body.fileName;
    let base64 = req.body.base64;

    // Converte o base64 para um buffer binário
    let buf = Buffer.from(base64, 'base64');

    // Escreve o buffer no arquivo.
    fs.writeFile("./fotos/"+fileName, buf,  "binary",function(err) {
        if(err) {
            next(err);
            res.json({msg: 'Erro ao salvar o arquivo.'});
        } else {
            res.json({msg: 'Arquivo salvo com sucesso.'});
        }
    });

    // Faz upload no S3
    let path = "fotos/"+fileName;
    s3.upload(buf, path);
}));

module.exports = router;