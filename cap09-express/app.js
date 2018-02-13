var express = require('express');
var app = express();

// Desliga o cache do express.
app.disable('etag');

// Configura para ler parâmetros por form-urlencoded e application/json
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET em /pessoa
app.get('/pessoa', function (req, res) {
	let nome = req.query.nome;
	let sobrenome = req.query.sobrenome;
	res.status(200).type("text");
	res.send(nome + " " + sobrenome);
})

// POST em /pessoa
app.post('/pessoa', function (req, res) {
	let nome = req.body.nome;
	let sobrenome = req.body.sobrenome;
	// Testa o valor do cabeçalho content-type
	if(req.is("json")) {
		// Se for JSON
		res.json( { nome:nome, sobrenome:sobrenome } );
	} else {
		// Caso contrário envia como texto
		res.type("text").send("Texto: " + nome + " " + sobrenome);
	}
})


app.get('/pessoa/:id', function (req, res) {
	let id = req.params.id;
	res.send("Buscar a Pessoa: " + id);

})

app.get('/pessoa/nome/:nome/sobrenome/:sobrenome', function (req, res) {
	let nome = req.params.nome;
	let sobrenome = req.params.sobrenome;
	res.send(nome + " " + sobrenome);
})

setTimeout(function () {
  console.log('boo')
}, 100)

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Servidor iniciado em http://%s:%s", host, port)
})
