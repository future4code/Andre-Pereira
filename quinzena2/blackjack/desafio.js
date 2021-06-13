/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Bem-vindo ao jogo de BlackJack")
let vamosJogar = confirm("Vamos iniciar o jogo BlackJack?")
if (vamosJogar === false) {
   alert("Você Desistiu, aperte F5 para recomeçar.")
}

let cartasJogador = []
let cartasComputador = []

while (vamosJogar) {
   if (vamosJogar) {
      let userOne = comprarCarta()
      let userTwo = comprarCarta()
      cartasJogador.push(userOne.texto, userTwo.texto)
      let computerOne = comprarCarta()
      let computerTwo = comprarCarta()
      cartasComputador.push(computerOne.texto, computerTwo.texto)
      let cartaNovamente = ((userOne.valor === 11 && userOne.texto === 'A') && (userTwo.valor === 11 && userTwo.texto === 'A')) || ((computerOne.valor === 11 && computerOne.texto === 'A') && (computerTwo.valor === 11 && computerTwo.texto === 'A'))

      // Validação dos Ases
      while (cartaNovamente) {
         userOne = comprarCarta()
         userTwo = comprarCarta()
         computerOne = comprarCarta()
         computerTwo = comprarCarta()
         cartaNovamente = confirm("Temos que comprar as cartas novamente.")
      }

      // A pontuação geral
      let pontosUser = userOne.valor + userTwo.valor
      let pontosComputer = computerOne.valor + computerTwo.valor

      let comprarNovaCarta = confirm(`Sua primeira carta é ${userOne.texto} e ${userTwo.texto}. A carta revelada do computador é ${computerOne.texto}
      Deseja comprar mais uma carta?`)

      // let flag = false
      // flag = comprarNovaCarta
      while (comprarNovaCarta) {
         let novaCartaJogador = comprarCarta()
         cartasJogador.push(novaCartaJogador.texto)
         pontosUser += novaCartaJogador.valor
         comprarNovaCarta = confirm(`Sua primeira carta é ${cartasJogador}. A carta revelada do computador é ${computerOne.texto}
      Deseja comprar mais uma carta?`)
         if (comprarNovaCarta === false) {
            break
         }
      }

      while (pontosComputer <= pontosUser) {
         let novaCartaComputador = comprarCarta()
         cartasComputador.push(novaCartaComputador.texto)
         pontosComputer += novaCartaComputador.valor
      }

      let mensagem = ""

      if (pontosComputer > 21 && pontosUser > 21) {
         mensagem = "Empate!"
      } else if (pontosUser === pontosComputer) {
         mensagem = "Empate!"
      } else if (pontosComputer > 21) {
         mensagem = "O usuário ganhou!"
      } else if (pontosUser > 21) {
         mensagem = "O computador ganhou!"
      } else if (pontosUser > pontosComputer) {
         mensagem = "O usuário ganhou!"
      } else if (pontosComputer > pontosUser) {
         mensagem = "O computador ganhou!"
      }

      alert("Suas cartas são " + cartasJogador + ". Sua pontuação é " + pontosUser + ".\n" +
         "As cartas do computador são " + cartasComputador + "." + "A pontuação do computador é " + pontosComputer + ".\n" +
         mensagem)

   } else {
      alert("O jogo acabou")
   }
   vamosJogar = confirm("Quer iniciar uma nova rodada?")
   cartasJogador = []
   cartasComputador = []
}