var express = require('express');
var app = express();

// Desliga o cache do express.
app.disable('etag');

// Configura uma rota na raiz /
app.get('/', function (req, res) {
	res.json( {nome:'Ricardo',sobrenome:'Lecheta'} );
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
