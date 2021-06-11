// Atividade de interpretação de código
//1.
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// O codigo no parametro vai reiniciar 5 vezes, porem no bloco ele esta adicionado por ele mesmo, ou seja, o valor final ficara 10

//2.
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//Vai ser impresso números maiores do 18 dentro do array.
//Eu usuario apenas o for com a propriedade lenght para ser possivel.

//3.
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

//Adicionaria 4 linhas com a quantidade de asteriscos respectivos ao valor de linhas.
//_______________________________________________________________________________________________________________________________________________________
// Atividade de escrita de código
//1.
let quantidadeBichos = Number(prompt("Quantos animais de estimação você tem?"))
let totalBichos = 0
let nomeBicho = []

if (quantidadeBichos <= 0) {
    console.log("Que pena! Você pode adotar um pet!")

} else {
    while (totalBichos < quantidadeBichos) {
        nomeBicho.push(prompt(`Digite o nome do ${totalBichos + 1}ª Pet`))
        totalBichos++
    }
    console.log(nomeBicho.toString())
}

//2.
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let menorNumero = 99999999999
let maiorNumero = 0

function imprimirUmPorVez(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
    return array
}

function dividirPorDez(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] / 10)
    }
    return array
}

function encontrarPares() {
    let numPares = []
    for (let i = 0; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] % 2 === 0) {
            numPares.push(arrayOriginal[i])
        }
    }
    return numPares
}

function encontrarIndice(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`O elemento do índex ${i} é ${array[i]}`)
    }
    return array
}

for (let numero of arrayOriginal) {
    if (numero > maiorNumero) {
        maiorNumero = numero
        // console.log(`Maior número ${maiorNumero}`)
    }

    if(numero < menorNumero){
        menorNumero = numero
        // console.log(`Menor número ${menorNumero}`)
    }
}




imprimirUmPorVez(arrayOriginal)

dividirPorDez(arrayOriginal)

console.log(encontrarPares())

encontrarIndice(arrayOriginal)

console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}.`)