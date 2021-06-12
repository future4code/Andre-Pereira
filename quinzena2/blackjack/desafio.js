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

console.log("Bem-vindo ao jogo de blackjack")
let vamosJogar = confirm("Vamos iniciar o jogo BlackJack?")
if (vamosJogar === false) {
   console.log("Você Desistiu, aperte F5 para recomeçar.")
}

while (vamosJogar) {

   if (vamosJogar) {
      let userOne = comprarCarta()
      let userTwo = comprarCarta()
      let computerOne = comprarCarta()
      let computerTwo = comprarCarta()
      let cartaNovamente = ((userOne.valor === 11 && userOne.texto === 'A') && (userTwo.valor === 11 && userTwo.texto === 'A')) || ((computerOne.valor === 11 && computerOne.texto === 'A') && (computerTwo.valor === 11 && computerTwo.texto === 'A'))


      while (cartaNovamente) {
         userOne = comprarCarta()
         userTwo = comprarCarta()
         computerOne = comprarCarta()
         computerTwo = comprarCarta()
         cartaNovamente = confirm("Temos que comprar as cartas novamente.")
      }

      let pontosUser = userOne.valor + userTwo.valor
      let pontosComputer = computerOne.valor + computerTwo.valor

      let comprarNovaCarta = confirm(`Sua primeira carta é ${userOne.texto} e ${userTwo.texto}. A carta revelada do computador é ${computerOne.texto}
      Deseja comprar mais uma carta?`)

      if (comprarNovaCarta) {
         let novaCarta = comprarCarta()
         pontosUser += novaCarta.valor
      }

      console.log(`Usuário - cartas: ${userOne.texto} ${userTwo.texto} - ${pontosUser}`)
      console.log(`Computador - cartas: ${computerOne.texto} ${computerTwo.texto} - ${pontosComputer}`)

      if (pontosUser > pontosComputer) {
         console.log("O usuário ganhou!")
      } else if (pontosComputer > pontosUser) {
         console.log("O computador ganhou!")
      } else if (pontosUser === pontosComputer) {
         console.log("Empate!")
      }


   } else {
      console.log("O jogo acabou")
   }
   vamosJogar = confirm("Deseja jogar novamente?")
}