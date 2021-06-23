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
  let retornaPares = []
  for (let i = 0; i < n; i++) {
    retornaPares.push(i * 2)
  }
  return retornaPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  if (a && b === c) {
    return 'Equilátero'
  } else if (a === b || !c) {
    return 'Isósceles'
  } else if (!a || !b === !c) {
    return 'Escaleno'
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

  const retorno = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: 0,
    diferenca: 0
  }

  // Descobrir o maior Numero e guardar numa variavel
  if (num1 > num2) {
    retorno.maiorNumero = num1
    numeroEscolhidoMaior = num1
    numeroEscolhidoMenor = num2
  } else if (num1 < num2) {
    retorno.maiorNumero = num2
    numeroEscolhidoMaior = num2
    numeroEscolhidoMenor = num1
  } else {
    retorno.maiorNumero = num1

  }

  // retornar se ele é divisel pelo menor
  if (numeroEscolhidoMaior % numeroEscolhidoMenor === 0) {
    retorno.maiorDivisivelPorMenor = true
  } else {
    retorno.maiorDivisivelPorMenor = false
  }

  // Diferenca entre os numeros maiores pelos menores.
  retorno.maiorNumero == num1 ? retorno.diferenca = num1 - num2 : retorno.diferenca = num2 - num1

  return retorno

}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temporario = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temporario;
      }
    }
  }

  return [array[array.length - 2], array[1]]

}

// EXERCÍCIO 11
function ordenaArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temporario = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temporario;
      }
    }
  }
  return array;
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filmePredileto = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return filmePredileto
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const filmePredileto = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }

  return `Venha assistir ao filme ${filmePredileto.nome}, de ${filmePredileto.ano}, dirigido por ${filmePredileto.diretor} e estrelado por ${filmePredileto.atores[0]}, ${filmePredileto.atores[1]}, ${filmePredileto.atores[2]}, ${filmePredileto.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }

  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const novaPessoa = {
    ...pessoa,
    nome: "ANÔNIMO"
  }

  return novaPessoa

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const maiorIdade = arrayDePessoas.filter(arrayDePessoas => {
    return arrayDePessoas.idade > 17
  })

  return maiorIdade

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menorIdade = arrayDePessoas.filter(arrayDePessoas => {
    return arrayDePessoas.idade < 18
  })

  return menorIdade
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const multiplicador = array.map(array => {
    return array * 2
  })
  return multiplicador
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const multiplicarComString = array.map(array => {
    return (array * 2).toString()
  })

  return multiplicarComString
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const verificar = array.map(array => {
    return (array + (array % 2 === 0 ? ' é par' : ' é ímpar')).toString()
  })

  return verificar
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const permissao = pessoas.filter(pessoas => {
    return pessoas.idade > 14 && pessoas.idade < 60 && pessoas.altura >= 1.50
  })
  return permissao
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const semPermissao = pessoas.filter(pessoas => {
    return pessoas.idade < 15 || pessoas.idade >= 60 || pessoas.altura < 1.5
  })
  return semPermissao
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  let flag = false;
  for (let i = 0; i < consultasNome.length - 1; i++) {
    flag = true;
    for (let i = 0; i < consultasNome.length - 1; i++) {
      let proximoNome = consultasNome[i + 1].nome
      let verificaPrimeiroNome = (consultasNome[i].nome).localeCompare(proximoNome)
      if (verificaPrimeiroNome === 1) {
        flag = false;
        let temporario = consultasNome[i + 1];
        consultasNome[i + 1] = consultasNome[i];
        consultasNome[i] = temporario;
      }
    }
  }
  return consultasNome;



  // Utilizando sort()
  // return consultasNome.sort((a, b) => {
  //   if (a.nome < b.nome) return -1
  //   return 0
  // })


}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

  function formatarData(dataParametro) {
    const [dia, mes, ano] = dataParametro.split('/');  
    return [ano, mes, dia]
  }

  // const formatarData = (data) => {
  //   const alterarData = data.split('/')
  //   let dia = alterarData[0]
  //   let mes = alterarData[1]
  //   let ano = alterarData[2]
  //   let novoFormatoData = [ano, mes, dia]
  //   return novoFormatoData
  // }

  let flag = false;
  for (let i = 0; i < consultasData.length - 1; i++) {
    flag = true;
    for (let i = 0; i < consultasData.length - 1; i++) {
      let dataAntes = new Date(formatarData(consultasData[i].dataDaConsulta))
      let dataSeguinte = new Date(formatarData(consultasData[i + 1].dataDaConsulta))
      if (dataSeguinte < dataAntes) {
        flag = false;
        let tmp = consultasData[i + 1];
        consultasData[i + 1] = consultasData[i];
        consultasData[i] = tmp;
      }
    }
  }
  return consultasData;



  // Utilizando o metodo sort()
  // // Transformar a data em milisegundos para comparar com o maior.
  // const ordenarData = (a, b) => {
  //   return new Date(a.dataDaConsulta).getTime() - new Date(b.dataDaConsulta).getTime()
  // }

  // // Converter para padrão americano.
  // consultasData.forEach(consulta => {
  //   consulta.dataDaConsulta = consulta.dataDaConsulta.split('/').reverse().join('-')
  // })

  // /* 
  //   UTilizando o retorno com o MAP

  //   return consultasData.sort(ordenarData).map(consulta => ({
  //     ...consulta,
  //     dataDaConsulta: consulta.dataDaConsulta.split('-').reverse().join('/')
  //   })) */

  // consultasData.sort(ordenarData).forEach(consulta => {
  //   consulta.dataDaConsulta = consulta.dataDaConsulta.split('-').reverse().join('/')
  // })

  // return consultasData

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

  return contas.map(conta => {
    return {
      cliente: conta.cliente,
      saldoTotal: conta.saldoTotal - conta.compras.reduce((acumulador, atual) => acumulador += atual, 0),
      compras: conta.compras
    }
  })

}