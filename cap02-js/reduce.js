var numeros = [1,2,3]
var s = numeros.reduce((valorAcumulado, n) => valorAcumulado + n*2);
console.log(s)
s = numeros.reduce((valorAcumulado, n) => valorAcumulado + n*2, 0);
console.log(s)