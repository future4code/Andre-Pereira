// Exercicio de interpretação

// 1 - 
// a.false
// b.false
// c.true
// d.boolean

//2 - 
// No console ira vir apenas duas strings juntas, porque ele não definiu essa variavel como um número. Ex.: 
// var1 = 10 e var2 = 10, resultado = 1010

//3 - 
// A sugestão ao colega é antes do prompt(), adicionar a funcionalidade Number()

// --------------------------------------------------------------------------------------------------------------------

// Exercicio de código

//1 - 
let idade = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual idade do seu amigo?"))
console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmigo)
console.log(Math.abs(idade - idadeAmigo))

//2 - 
let numeroPar = Number(prompt("Digite um número par."))
let resto = numeroPar % 2
console.log(resto)
// Todo número par o resultado é "0"
// Se o usuario enviar um número impar sempre sobra o número "1" nesse algoritmo

//3 - 
let idadeUser = Number(prompt("Digite sua idade."))
const idadeMeses = idadeUser * 12
const idadeDias = idadeUser * 365
const idadeHoras = idadeUser * 8760
console.log("Idade em meses:", idadeMeses)
console.log("Idade em dias:", idadeDias)
console.log("Idade em horas:", idadeHoras)

//4 - 
let numero1 = Number(prompt("Digite um número."))
let numero2 = Number(prompt("Digite outro número"))

console.log("O primeiro numero é maior que segundo?", (numero1 > numero2))
console.log("O primeiro numero é igual ao segundo?", (numero1 == numero2))
console.log("O primeiro numero é divisível pelo segundo?", ((numero1 % numero2) == 0))
console.log("O segundo numero é divisível pelo primeiro?", ((numero2 % numero1) == 0))

//---------------------------------------------------------------------------------------------------------------------
// Desafio

//1 - 
let farParaKelvin = (77 - 32) * (5/9) + 273.15
console.log("De 77ºF para Kelvin: " + farParaKelvin + "K")

let grausParaFar = (80) * (9/5) + 32
console.log("De 80ºC para Fahrenheit: " + grausParaFar + "ºF")

let conversaoDupla = (30) * (9/5) + 32
let conversaoFinal = (conversaoDupla - 32) * (5/9) + 273.15
console.log("De 30ºC para Fahrenheit e Kelvin respectivamente: " + conversaoDupla + "ºF e " + conversaoFinal + "ºK")

let celciusUser = Number(prompt("Digite a temperatura Graus Celcius."))
let conversaoUser = (celciusUser) * (9/5) + 32
let conversaoKelvinUser = (conversaoUser - 32) * (5/9) + 273.15
console.log("De " + celciusUser + " para Fahrenheit e Kelvin: " + conversaoUser + "ºF e " + conversaoKelvinUser + "ºK")

//2 - 
let consumoEnergia = Number(prompt("Digite a quantidade de quilowatts hora."))
let precoPagar = consumoEnergia * 0.05
let energiaComDesconto = precoPagar - (precoPagar * 0.15)

console.log("Valor a ser pago pelo consumo de energia: R$ ", precoPagar)
console.log("Sua energia com 15% de desconto: R$ ", energiaComDesconto)

//3 -
let libra = 20
let oz = 10.5
let milha = 100
let pes = 50
let gal = 103.56
let xic = 450

let conversorLibraParaKilo = libra / 2.205
let conversorOzParaKilo = oz / 35.274
let conversorMilhaParaMetro = milha * 1609
let conversorPesParaMetro = pes / 3.281
let conversorGalaoParaLitro = gal * 3.785
let conversorXicaraParaLitro = xic * 0.24

console.log("20lb equivalem a ", conversorLibraParaKilo.toFixed(3), "kg")
console.log("10.5oz equivalem a ", conversorOzParaKilo.toFixed(3),"kg")
console.log("100mi equivalem a ", conversorMilhaParaMetro.toFixed(2), "m")
console.log("50ft equivalem a ", conversorPesParaMetro.toFixed(3), "m")
console.log("103.56gal equivalem a ", conversorGalaoParaLitro.toFixed(3), "l")
console.log("450xic equivalem a ", conversorXicaraParaLitro.toFixed(2), "l")

let pesUser = Number(prompt("Digite por favor quantidade de pés para conversão em metros."))
let pesMetros = pesUser / 3.281

console.log("Convertendo ", pesUser, "ft para ", pesMetros.toFixed(2), "metros")