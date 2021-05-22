// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  let altura = Number(prompt("Digite por favor a altura"))
  let largura = Number(prompt("Digite por favor a largura"))
  const area = altura * largura

  console.log(area)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Digite por favor o ano em que estamos."))
  let anoNascimento = Number(prompt("Digite por favor o ano de seu nascimento."))
  let idade = anoAtual - anoNascimento

  console.log(idade)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  let peso = Number(prompt("Digite seu peso em kg. Ex.: 68"))
  let alturaPessoa = Number(prompt("Sua altura como o exemplo. Ex.: 1.72"))
  const imc = peso / (alturaPessoa * alturaPessoa)

  console.log(imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  let nomeUsuario = prompt("Digite o seu usuário por favor.")
  let idadeUsuario = prompt("Agora a sua idade por favor.")
  let emailUsuario = prompt("Por último digite seu e-mail.")

  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let corUm = prompt("Digite uma cor preferida.")
  let corDois = prompt("Digite outra cor do seu agrado.")
  let corTres = prompt("Digite uma ultima cor do seu agrado.")

  console.log([corUm, corDois, corTres])

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  let palavraMaiuscula = prompt("Digite por favor uma palavra ou frase para colocarmos em maiuscúlas.")

  console.log(palavraMaiuscula.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  let custoTeatro = Number(prompt("Digite por favor o custo do teatro total. Ex.: 3000."))
  let ingresso = Number(prompt("Digite por favor o valor do ingresso individual."))
  let resultado = custoTeatro / ingresso

  console.log(resultado)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  let umaPalavra = prompt("Digite uma palavra.")
  let duasPalavras = prompt("Digite outra palavra.")
  if (umaPalavra.length != duasPalavras.length) {
    console.log(false)
  } else {
    console.log(true)
  }
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let palavraUm = prompt("Digite uma palavra.")
  let palavraDois = prompt("Digite outra palavra para comparar com a primeira.")

  if (palavraUm.toLowerCase() === palavraDois.toLowerCase()) {
    console.log(true)
  } else {
    console.log(false)
  }
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let ano = Number(prompt("Qual o ano que estamos?"))
  let nascimento = Number(prompt("Seu ano de nascimento."))
  let anoEmissaoRg = Number(prompt("Qual ano de emissão do RG?"))
  let idadeAtual = ano - nascimento
  let renovar = ano - anoEmissaoRg

  if (idadeAtual <= 20 && (renovar >= 5)) {
    console.log(true)
  } else if (idadeAtual > 20 && idadeAtual <= 50 && (renovar >= 10)) {
    console.log(true)
  } else if (idadeAtual > 50 && (renovar >= 15)) {
    console.log(true)
  } else {
    console.log(false)
  }



}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Digite o ano atual por favor!"))

  if (anoAtual % 400 == 0) {
    console.log(true)
  } else if (anoAtual % 4 == 0 && anoAtual % 100 != 0) {
    console.log(true)
  } else {
    console.log(false)
  }
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  let maiorIdade = prompt("Tem mais de 18 anos. Responda com SIM ou NAO").toLowerCase()
  let medioCompleto = prompt("Tem ensino médio completo? SIM ou NAO").toLowerCase()
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?").toLowerCase()


  if (maiorIdade == "sim" && medioCompleto == "sim" && disponibilidade == "sim") {
    console.log(true)
  } else {
    console.log(false)
  }
}