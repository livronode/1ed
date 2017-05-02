var express = require('express');
var app = express();

// Desliga o cache do express.
app.disable('etag');

// Configura para ler parâmetros por form-urlencoded e application/json
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configura uma rota na raiz /
app.get('/', function (req, res) {
	let nome = req.query.nome;
	let sobrenome = req.query.sobrenome;
	res.status(200).type("text");
	res.send(nome + " " + sobrenome);
})

app.post('/', function (req, res) {
	let nome = req.body.nome;
	let sobrenome = req.body.sobrenome;
	// Testa o valor do cabeçalho content-type
	if(req.is("json")) {
		// Se for JSON
		res.json({nome:nome,sobrenome:sobrenome});
	} else {
		// Caso contrário envia como texto
		res.type("text").send("Texto: " + nome + " " + sobrenome);
	}
})


app.get('/carros/:id', function (req, res) {
	let id = req.params.id;
	res.send("Buscar o carro: " + id);

})

app.get('/pessoas/nome/:nome/sobrenome/:sobrenome', function (req, res) {
	let nome = req.params.nome;
	let sobrenome = req.params.sobrenome;
	res.send(nome + " " + sobrenome);
})


var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
