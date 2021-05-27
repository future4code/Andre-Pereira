/* Interpretação de código
1.

    A - undefined
    B - null
    C - 11
    D - 3
    E - O 4 é substituído pelo 19
    F - 11
*/

/* 
2.
    SUBI NUM ÔNIBUS EM MIRROCOS 27

 */

//-----------------------------------------------------------------------------------------------------------------------------------

// Escrita de Código
// 1.
let nome = prompt("Qual é o seu nome?")
let email = prompt("Qual seu e-mail?")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo(a), ${nome}!`)


// 2.
let comidas = ["Hamburguer", "Pizza", "Acaraje", "Batata-frita", "Churrasco"]
console.log(comidas)
console.log(`Essas são as minhas comidas preferidas: ${comidas.toString().replaceAll(",", "\n")}`)
let orderUser = prompt("Qual seu prato predileto?")
let i = 2
comidas.splice(1, 1, orderUser)
console.log(`Comidas atualizadas com a segunda escolha do usuário: ${comidas.toString().replaceAll(",", "\n")}`)



//3.
let listaDeTarefas = []
let userOne = prompt("Descreva o que você tem pra fazer hoje!")
let userTwo = prompt("Descreva o que você tem pra fazer hoje!")
let userThree = prompt("Descreva o que você tem pra fazer hoje!")
listaDeTarefas.push(userOne, userTwo, userThree)
console.log(`3 tarefas escolhidas pelo usuario: ${listaDeTarefas}`)
let ordemDaLista = Number(prompt("Escolha um número de suas tarefas de 1 a 3 para ser excluída."))
listaDeTarefas.splice(ordemDaLista - 1, 1)
console.log(`Lista atualizada com exclusão do usuario: ${listaDeTarefas}`)


//---------------------------------------------------------------------------------------------------------------------------------------------------------
// Desafio
// 1. 
let frase = prompt(["Escolha uma frase."])
console.log(frase.split(" "))

// 2.
let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(`Índice de Abacaxi no Array: ${frutas.indexOf("Abacaxi")}, o tamanho total do Array é: ${frutas.length}`)