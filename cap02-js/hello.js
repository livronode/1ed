function testeVar() {
	var a = 1;
	var b = 2;
	var soma = a + b;
	var nome;
	if(nome == undefined) {
		console.log("Teste 1) O nome não foi inicializado.");
	}
	if(typeof(nome) == "undefined") {
		console.log("Teste 2) O nome não foi inicializado.");
	}
	console.log("O tipo do nome é %s e o tipo da soma é %s", typeof(nome), typeof(soma));
	console.log("Olá %s, o resultado da soma é: %d", nome, soma,"que","legal");
}
// Executa a função testeVar()
// testeVar()

/*function soma(a, b) {
	return a + b;
}
var soma = soma(1,2);*/
// console.log(soma);

function testeArray() {
	var numeros = [1,2,3]
	numeros.push(4);
	numeros.push(5);
	// for(let i = 0; numeros.length > i; i++) {
 //  		console.log(numeros[i]);
 //  	}
 //  	for(let i in numeros) {
	// 	console.log(numeros[i]);
	// }

	// numeros.map(n => console.log(n));

	numeros.map(n => {
		console.log(n)
	});

	// numeros.map(function(n) {
	// 	console.log(n)
	// });

}
// testeArray();

function testeMap() {
	var map = []
	map["nome"] = "Ricardo"
	map["sobrenome"] = "Lecheta"
	console.log(map)
	console.log("Nome completo:", map["nome"], map["sobrenome"])

}
// testeMap()

/*
function objetos1() {
	var pessoa = Object()
	pessoa.nome = "Ricardo";
	pessoa.hello = function() {
		return "Hello Pessoa!";
	}
	console.log(pessoa);
	console.log(pessoa.nome);
	console.log(pessoa.hello());
}
objetos1();
*/

/*
function objetos2() {
	var pessoa = {
		nome : 'Ricardo',
		hello: function() {
			return "Hello Pessoa!";
		}
	}
	console.log(pessoa);
	console.log(pessoa.nome);
	console.log(pessoa.hello());
}
objetos2();
*/

/*
function Pessoa() {
		this.nome = "Ricardo";
		this.hello = function() {
			return "Hello Pessoa!";
		}
}
function objetos3() {
	var pessoa = new Pessoa();
	console.log(pessoa);
	console.log(pessoa.nome);
	console.log(pessoa.hello());
}
objetos3();
*/

class Pessoa {
	constructor() {
		this.nome = "Ricardo";
	}
	static hello() {
		return "Hello Pessoa!";
	}

}

function objetos4() {
	var pessoa = new Pessoa();
	console.log(pessoa);
	console.log(pessoa.nome);
	console.log(Pessoa.hello());
}
// objetos4();


// Esta função recebe outra função como parâmetro
function executar(funcao, a, b) {
	return funcao(a,b);
}
// A função soma() será executada...
var funcao = function(a,b) { return a + b};
let resultado = executar(funcao, 1,2);
// Vai imprimir 3
console.log(resultado); 

