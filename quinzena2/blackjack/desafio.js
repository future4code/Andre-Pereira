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

alert("Bem-vindo(a) ao jogo - BlackJack")
let vamosJogar = confirm("Vamos iniciar o jogo?")
if (vamosJogar === false) {
   alert("Para recomeçar o jogo aperte F5 ou atualize a página.")
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

      // Validação dos Ases
      while (((userOne.valor === 11 && userOne.texto === 'A') && (userTwo.valor === 11 && userTwo.texto === 'A')) || ((computerOne.valor === 11 && computerOne.texto === 'A') && (computerTwo.valor === 11 && computerTwo.texto === 'A'))) {
         userOne = comprarCarta()
         userTwo = comprarCarta()
         computerOne = comprarCarta()
         computerTwo = comprarCarta()
      }

      // A pontuação geral
      let pontosUser = userOne.valor + userTwo.valor
      let pontosComputer = computerOne.valor + computerTwo.valor


      // Compra da nova carta para o jogador
      while (pontosUser < 21) {
         if (comprarNovaCarta = confirm(`Suas cartas são ${cartasJogador.toString().replaceAll(",", " ")}. A carta revelada do computador é ${computerOne.texto}
Deseja comprar mais uma carta?`)) {
            let novaCartaJogador = comprarCarta()
            cartasJogador.push(novaCartaJogador.texto)
            pontosUser += novaCartaJogador.valor
         } else {
            break
         }
      }

      // Compra das novas cartas do computador
      while (pontosUser <= 21 && pontosComputer < pontosUser) {
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

      alert("Suas cartas são " + cartasJogador.toString().replaceAll(",", " - ") + ". Sua pontuação é " + pontosUser + ".\n" +
         "As cartas do computador são " + cartasComputador.toString().replaceAll(",", " - ") + "." + " A pontuação do computador é " + pontosComputer + ".\n" +
         mensagem)

   } else {
      alert("O jogo acabou")
   }
   vamosJogar = confirm("Quer iniciar uma nova rodada?")
   cartasJogador = []
   cartasComputador = []
}