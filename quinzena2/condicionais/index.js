// Atividade de interpretação de código
/* 
1A. Ele verifica se é par e devolve a mensagem PASSOU NO TESTE, se ele não for um número par ele devolve NÃO PASSOU NO TESTE.
1B. Passou no teste apenas os números que não resta nada pelo número dois, ou seja, números pares.
1C. Não passou no teste são números que restão aluma coisa com o número dois, no entanto são números impares.

2A. Ele serve para entregar o valor da fruta escolhida pelo usuario.
2B. "O preço da fruta maçã é R$ 2,25"
2C. Ela irá continuar lendo e entregara o valor do default, ou seja 5.

3A. Ele tem uma condição informando que se o número escolhido pelo usuario for maio que zero, imprimir na tela passou no teste.
3B. Se for 10 positivo ele vai passar no teste e imprimira a mensagem do console.log(), se for negativo não ira fazer nada.
3C. Era dar um erro de variavel mensagem nao estara definida, porque ele nao entrara no if para guardar essa mensagem.
*/

//_________________________________________________________________________________________________________________________________________________
// Atividade de escrita de código
//1

const idade = Number(prompt("Qual a sua idade?"))

if(idade >= 18){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}


//2

const turno = prompt("Digite o turno em que você estuda. Ex.: D(diurno), V(vespertino) e N(noturno)").toLowerCase()

if(turno === "d"){
    console.log("Bom dia")
} else if(turno === "v"){
    console.log("Boa tarde")
} else if(turno === "n"){
    console.log("Boa noite")
} else {
    console.log("Escolha o turno correto por favor: D(diurno), V(vespertino) e N(noturno)")
}


//3

const turno2 = prompt("Digite o turno em que você estuda. Ex.: D(diurno), V(vespertino) e N(noturno)").toLowerCase()

switch (turno2) {
    case 'd':
        console.log("Bom dia.")
        break
    case 'v':
        console.log('Boa tarde.')
        break
    case 'n':
        console.log('Boa noite.')
        break
    default:
        console.log('Não foi encontrado esse turno, digite o corretamente.')
}


//4

const generoFilme = prompt("Qual o tipo de filme que você quer assistir?")
const valorIngresso = Number(prompt("Qual valor do ingresso?"))

if(generoFilme === 'fantasia' && valorIngresso < 15){
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme :(')
}

//_________________________________________________________________________________________________________________________________________________________
// Desafio

//1
const generoFilme = prompt("Qual o tipo de filme que você quer assistir?")
const valorIngresso = Number(prompt("Qual valor do ingresso?"))
const lanche = prompt("Qual lanche? Ex.: pipoca, chocolate, doces, etc")

if(generoFilme === 'fantasia' && valorIngresso < 15){
    console.log(`Bom filme`)
    console.log(`Aproveite o seu ${lanche}`)
} else {
    console.log('Escolha outro filme :(')
}

//2
let nomeCompleto = prompt("Digite seu nome completo.")
let tipoJogo = prompt("Escolha o tipo IN(internacional) ou DO(doméstico)").toLowerCase()
let etapaJogo = prompt("Qual etapa SF(semi-final), DT(decisão terceiro lugar) ou FI(final)").toLowerCase()
let categoria = Number(prompt("Qual categoria, poder ser 1, 2, 3 ou 4."))
let quantidadeIngressos = Number(prompt("Quantos ingressos?"))

const dolar = 4.10
if(tipoJogo === 'do' && etapaJogo === 'sf' && categoria === 1){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Nacional
    Etapa do jogo: ${etapaJogo}
    Categoria: 1
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: R$ 1.320,00
    Valor total: R$ ${quantidadeIngressos * 1320}`)
} else if(tipoJogo === 'do' && etapaJogo === 'sf' && categoria === 2){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Nacional
    Etapa do jogo: ${etapaJogo}
    Categoria: 2
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: R$ 880,00
    Valor total: R$ ${quantidadeIngressos * 880}`)
} else if(tipoJogo === 'do' && etapaJogo === 'sf' && categoria === 3){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Nacional
    Etapa do jogo: ${etapaJogo}
    Categoria: 3
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: R$ 550,00
    Valor total: R$ ${quantidadeIngressos * 550}`)
} else if(tipoJogo === 'do' && etapaJogo === 'sf' && categoria === 4){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Nacional
    Etapa do jogo: Semi-Final
    Categoria: 4
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: R$ 220,00
    Valor total: R$ ${quantidadeIngressos * 220}`)
} else if(tipoJogo === 'do' && etapaJogo === 'dt' && categoria === 1){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Nacional
    Etapa do jogo: Decisão do 3ª Lugar
    Categoria: 1
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: R$ 660,00
    Valor total: R$ ${quantidadeIngressos * 660}`)
} else if(tipoJogo === 'do' && etapaJogo === 'dt' && categoria === 2){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Nacional
    Etapa do jogo: Decisão do 3ª Lugar
    Categoria: 2
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: R$ 440,00
    Valor total: R$ ${quantidadeIngressos * 440}`)
} else if(tipoJogo === 'do' && etapaJogo === 'dt' && categoria === 3){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Nacional
    Etapa do jogo: Decisão do 3ª Lugar
    Categoria: 3
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: R$ 330,00
    Valor total: R$ ${quantidadeIngressos * 330}`)
} else if(tipoJogo === 'do' && etapaJogo === 'dt' && categoria === 4){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Nacional
    Etapa do jogo: Decisão do 3ª Lugar
    Categoria: 4
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: R$ 170,00
    Valor total: R$ ${quantidadeIngressos * 170}`)
} else if(tipoJogo === 'do' && etapaJogo === 'fl' && categoria === 1){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Nacional
    Etapa do jogo: Final
    Categoria: 1
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: R$ 1980,00
    Valor total: R$ ${quantidadeIngressos * 1980}`)
} else if(tipoJogo === 'do' && etapaJogo === 'fl' && categoria === 2){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Nacional
    Etapa do jogo: Final
    Categoria: 2
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: R$ 1320,00
    Valor total: R$ ${quantidadeIngressos * 1320}`)
} else if(tipoJogo === 'do' && etapaJogo === 'fl' && categoria === 3){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Nacional
    Etapa do jogo: Final
    Categoria: 3
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: R$ 880,00
    Valor total: R$ ${quantidadeIngressos * 880}`)
} else if(tipoJogo === 'do' && etapaJogo === 'fl' && categoria === 4){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Nacional
    Etapa do jogo: Final
    Categoria: 4
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: R$ 330,00
    Valor total: R$ ${quantidadeIngressos * 330}`)
} else if(tipoJogo === 'in' && etapaJogo === 'sf' && categoria === 1){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do jogo: Semi-final
    Categoria: 1
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: U$ ${(1320 * dolar).toFixed(2)}
    Valor total: U$ ${quantidadeIngressos * ((1320 * dolar).toFixed(2))}`)
} else if(tipoJogo === 'in' && etapaJogo === 'sf' && categoria === 2){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do jogo: Semi-final
    Categoria: 2
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: U$ ${(880 * dolar).toFixed(2)}
    Valor total: U$ ${quantidadeIngressos * ((880 * dolar).toFixed(2))}`)
} else if(tipoJogo === 'in' && etapaJogo === 'sf' && categoria === 3){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do jogo: Semi-final
    Categoria: 3
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: U$ ${(550 * dolar).toFixed(2)}
    Valor total: U$ ${quantidadeIngressos * ((550 * dolar).toFixed(2))}`)
} else if(tipoJogo === 'in' && etapaJogo === 'sf' && categoria === 4){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do jogo: Semi-final
    Categoria: 4
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: U$ ${(220 * dolar).toFixed(2)}
    Valor total: U$ ${quantidadeIngressos * ((220 * dolar).toFixed(2))}`)
}else if(tipoJogo === 'in' && etapaJogo === 'dt' && categoria === 1){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do jogo: Decisão do 3ª lugar
    Categoria: 1
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: U$ ${(660 * dolar).toFixed(2)}
    Valor total: U$ ${quantidadeIngressos * ((660 * dolar).toFixed(2))}`)
} else if(tipoJogo === 'in' && etapaJogo === 'dt' && categoria === 2){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do jogo: Decisão do 3ª lugar
    Categoria: 2
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: U$ ${(440 * dolar).toFixed(2)}
    Valor total: U$ ${quantidadeIngressos * ((440 * dolar).toFixed(2))}`)
} else if(tipoJogo === 'in' && etapaJogo === 'dt' && categoria === 3){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do jogo: Decisão do 3ª lugar
    Categoria: 3
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: U$ ${(330 * dolar).toFixed(2)}
    Valor total: U$ ${quantidadeIngressos * ((330 * dolar).toFixed(2))}`)
} else if(tipoJogo === 'in' && etapaJogo === 'dt' && categoria === 4){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do jogo: Decisão do 3ª lugar
    Categoria: 4
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: U$ ${(170 * dolar).toFixed(2)}
    Valor total: U$ ${quantidadeIngressos * ((170 * dolar).toFixed(2))}`)
} else if(tipoJogo === 'in' && etapaJogo === 'fl' && categoria === 1){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do jogo: Final
    Categoria: 1
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: U$ ${(1980 * dolar).toFixed(2)}
    Valor total: U$ ${quantidadeIngressos * ((1980 * dolar).toFixed(2))}`)
} else if(tipoJogo === 'in' && etapaJogo === 'fl' && categoria === 2){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do jogo: Final
    Categoria: 2
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: U$ ${(1320 * dolar).toFixed(2)}
    Valor total: U$ ${quantidadeIngressos * ((1320 * dolar).toFixed(2))}`)
} else if(tipoJogo === 'in' && etapaJogo === 'fl' && categoria === 3){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do jogo: Final
    Categoria: 3
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: U$ ${(880 * dolar).toFixed(2)}
    Valor total: U$ ${quantidadeIngressos * ((880 * dolar).toFixed(2))}`)
} else if(tipoJogo === 'in' && etapaJogo === 'fl' && categoria === 4){
    console.log(`--- Dados da compra ---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do jogo: Final
    Categoria: 4
    Quantidade de ingresso: ${quantidadeIngressos}
    --- Valores ---
    Valor do ingresso: U$ ${(330 * dolar).toFixed(2)}
    Valor total: U$ ${quantidadeIngressos * ((330 * dolar).toFixed(2))}`)
} else {
    console.log("Por favor escolha as informações corretas.")
}