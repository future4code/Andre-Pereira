/*Exercicio de Interpretação de codigo

 1. 
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10)) 

A.  10
    50

B.  Não imprimirá nada porque retiramos o console


2.  
A.  essa função esta sendo passada para uma constante e recebendo um prompt, contudo ele retornara e imprimira na tela um boleano true ou false se caso tiver na frase a palavra "cenoura"

B.  i. true
    ii.true
    iii.true
*/
// --------------------------------------------------------------------------------------------------------------------

// Atividade de escrita de código
//1A. 
function imprimirMensagem() {
    console.log("Eu sou André Luiz, tenho 33 anos e moro em Teixeira de Freitas e sou estudante.")
}

imprimirMensagem()

//1B.
const mensagem = (nome, idade, endereco, profissao) => {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro na ${endereco} e sou ${profissao}`)
}

mensagem("André Luiz", 33, "Rua Aracatu 622", "Analista")

//2A.
function somar(num1, num2) {
    let resultado = num1 + num2
    return resultado
}

console.log(somar(2, 5))

//2B.
function maiorNumero(num1, num2) {
    let comparacao = num1 >= num2
    return comparacao
}
console.log(maiorNumero(2, 3))

//2C.
function parOuNao(num) {
    let par = num % 2 == 0
    return par
}

console.log(parOuNao(6))

//2D.
function contar(text) {
    console.log(text.length, text.toUpperCase())
}

contar("Olá meu nome é André Luiz.")

//3.
function somar(num1, num2) {
    let soma = num1 + num2
    return soma
}

function subtrair(num1, num2) {
    let soma = num1 - num2
    return soma
}

function dividir(num1, num2) {
    let soma = num1 / num2
    return soma
}

function multiplicar(num1, num2) {
    let soma = num1 + num2
    return soma
}
const num1 = Number(prompt("Digite um número por favor."))
const num2 = Number(prompt("Digite um outro número por favor."))

console.log(`Números inseridos são: ${num1} e ${num2}`)
console.log("Soma:", somar(num1, num2))
console.log("Subtrair:", subtrair(num1, num2))
console.log("Dividir:", dividir(num1, num2).toFixed(2))
console.log("Multiplicar:", multiplicar(num1, num2))

//--------------------------------------------------------------------------------------------------------------
//Desafio


//1A.
const primeiraFuncao = (params) => {
    Number(console.log(params))
}

//1B.
const segundaFuncao = (num1, num2) => {
    soma = num1 + num2
    primeiraFuncao(soma)
}

console.log(segundaFuncao(2, 3))

//2.
function pitagoras(a, b) {
    let resultado = Math.hypot(a, b).toFixed(3)
    return resultado
}

console.log(pitagoras(5, 5))