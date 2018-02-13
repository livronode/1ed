let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let db = require('./model/mongodb');

// Configura para ler dados do POST por form-urlencoded e application/json
app.use(bodyParser.urlencoded({limit: '10mb', extended: false }));
app.use(bodyParser.json());

// Permite utilizar arquivos estáticos na pasta view
app.use(express.static(__dirname + '/view'));

// middleware  para interceptar a request e mostrar a data atual
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// Rota na raiz.
app.get('/', function (req, res) {
	res.send("API dos Carros");
});

// Rotas
app.use('/api/carros', require('./routes/carros'));
app.use('/api/upload', require('./routes/upload'));

// Teste de Erro
app.get('/teste_erro', function (req, res) {
	throw Error('Erro Ninja');
});

// Rota para não encontrado '404'
app.use(function(req, res, next) {
  res.status(404);
  res.json({ err: "Não encontrado." });
});

// Rota para não encontrado '404'
app.use(function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
});

// Rota genérica de erro '500'
app.use(function(err, req, res, next) {
    //console.log(err)
	res.status(500);
  	res.json({ erro: 'Erro na transação' });
});

// Conecta no Mongo para iniciar
db.connect(function(err) {
    if (err) {
        console.log('Erro ao conectar no mongo Mongo.');
        process.exit(1)
    } else {
        console.log("MongoDB conectado: ", db);

        // Conexão OK. Vamos inicia o servidor do Node 
        let server = app.listen(3000, function () {
            let host = server.address().address;
            let port = server.address().port;
            console.log("Servidor iniciado em http://%s:%s", host, port)
        });
    }
});
