// EXERCÍCIO 01
function inverteArray(array) {
  const arrayInvertido = array.map((valor, i) => {
    return array[array.length - 1 - i]
  })

  return arrayInvertido

}
// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const numerosPares = array.filter((valor) => {
    return valor % 2 === 0
  })
  const numerosElevados = numerosPares.map((valor) => {
    if (valor % 2 === 0) {
      return valor * valor
    }
  })

  return numerosElevados
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const numerosPares = array.filter(valor => {
    return valor % 2 === 0
  })
  return numerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let numeroMaior = []
  for (let numero of array) {
    if (numero > numeroMaior) {
      numeroMaior = numero
    }
  }

  return numeroMaior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  for (let i = 0; i <= array.length; i++) {
    return array.length
  }
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3

  const cond1 = booleano1 && booleano2 && !booleano4
  const cond2 = (booleano1 && booleano2) || !booleano3
  const cond3 = (booleano2 || booleano3) && (booleano4 || booleano1)
  const cond4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const cond5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  const novoArray = [cond1, cond2, cond3, cond4, cond5]
  return novoArray

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  for (let i = 0; i < n[0]; i++) {
    n.push(i)
  }
  n.shift()
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'

  if (a === b === c) {
    return 'Equilátero'
  } else if (a !== b !== c) {
    return 'Escaleno'
  } else {
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }

  const compararNumeros = (num1, num2) => {
    if (num1 > num2) {
      return num1
    } else {
      return num2
    }



    const retorno = {
      maiorNumero: 0,
      maiorDivisivelPorMenos: 0,
      diferenca: 0
    }
  }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const maioresDeIdade = arrayDePessoas.filter(array => {
    return array.idade > 17
  })
  return maioresDeIdade
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menorIdade = arrayDePessoas.filter(array => {
    return array.idade < 18
  })
  return menorIdade
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}