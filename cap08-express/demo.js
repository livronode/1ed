/**
https://expressjs.com/en/guide/routing.html
**/
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var parser = bodyParser.urlencoded({ extended: false })

/**
Para ler

{ "nome": "Lecheta" , "tipo" : "luxo"}
**/
app.use (function(req, res, next) {
    var data='';
    req.setEncoding('utf8');
    req.on('data', function(chunk) { 
       data += chunk;
    });

    req.on('end', function() {
        req.body = data;
        next();
    });
});

app.get('/', function (req, res) {
   // res.send(req.query.nome + " " + req.query.sobrenome);

   res.send(req.query.nome + " " + req.query.sobrenome);
})

app.get('/users/:userId', function (req, res) {
   // res.send(req.query.nome + " " + req.query.sobrenome);
   console.log(req.url);
   // res.send(req.params);
   // res.redirect('http://www.google.com');
})


app.post('/', parser, function (req, res) {
	// form url encodeded
   // res.send(req.body.nome + " " + req.body.sobrenome);

   res.send(req.body);
})

app.all('/', function (req, res, next) {
  res.send("indefinido");
})

app.get('/teste', function (req, res) {
   res.send('Hello World TESTE');
})

app.get('/testeget', function (req, res) {
   res.send('Hello World get');
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
