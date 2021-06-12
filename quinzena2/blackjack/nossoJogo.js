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

    /* 
    console.log("Bem-vindo ao jogo de blackjack")
    let vamosJogar = confirm("Vamos iniciar o jogo BlackJack?")
    
    while (vamosJogar) {
       if (vamosJogar) {
          let userOne = comprarCarta()
          let userTwo = comprarCarta()
          let computerOne = comprarCarta()
          let computerTwo = comprarCarta()
    
    
          let pontosUser = userOne.valor + userTwo.valor
          let pontosComputer = computerOne.valor + computerTwo.valor
    
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
    } */