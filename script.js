const primeiroNumero = prompt("Qual o Primeiro número?");
const segundoNumero = prompt("Qual o segundo número?");

var numerosIguais = (primeiroNumero === segundoNumero);

const somarValores = parseInt(primeiroNumero) + parseInt(segundoNumero);

const conferirNumerosIguais = (numerosIguais ? "\nOs números são iguais" : "\nOs números não são iguais");

var compararDez = (somarValores > 10);
var compararVinte = (somarValores > 20);

const compararVarDez = (compararDez ? "\nO número é maior que 10" : "\nO número é menor que 10");
const compararVarVinte = (compararVinte ? " e maior que 20" : " e menor que 20")

alert("O Resultado da conta é: " +somarValores +conferirNumerosIguais +compararVarDez+compararVarVinte)



