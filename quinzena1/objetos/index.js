// Atividade de interpretação de código
//1A.
/* Matheus Nachtergaele
Virginia Cavendish
canal: "Globo", horario: "14h" */

//2A.
/* nome: "Juca", 
	idade: 3, 
	raca: "SRD"

    nome: "Juba", 
	idade: 3, 
	raca: "SRD"

    nome: "Jubo", 
	idade: 3, 
	raca: "SRD" */

//2B.Spread realiza uma copia do objeto.

//3A. False
//3B. Ele retornou o valor da propriedade que estava sendo passada na função, porem a altura não existia essa propriedade, então nao retornaria nada.
//--------------------------------------------------------------------------------------------------------------------------
// Atividade de escrita de código
//1A.
const pessoa = {
    nome: "André Luiz",
    apelidos: ["Dé", "Dédé", "Deco"]
}

const imprimirDados = (objeto) => {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}.`)
}

imprimirDados(pessoa)

//1B.
const novaPessoa = {
    ...pessoa,
    apelidos: ["Dézinho", "Dé Luiz", "Luiz"]
}

imprimirDados(novaPessoa)

//2A.
const pessoa1 = {
    nome: "André Luiz",
    idade: 33,
    profissao: "Administrador"
}

const pessoa2 = {
    nome: "Emilly",
    idade: 24,
    profissao: "Recursos Humanos"
}

//2B.
const novoObjeto = (obj) => {
    return console.log([obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length])
}

novoObjeto(pessoa1)
novoObjeto(pessoa2)

//3A.
let carrinho = []

//3B.
const fruta1 = {
    nome: "Banana",
    disponibilidade: true
}
const fruta2 = {
    nome: "Maçã",
    disponibilidade: true
}
const fruta3 = {
    nome: "Laranja",
    disponibilidade: true
}

//3C.
const receberFrutas = (fruta) => {
    carrinho.push(fruta)
}

receberFrutas(fruta1)
receberFrutas(fruta2)
receberFrutas(fruta3)

console.log(carrinho)
//--------------------------------------------------------------------------------------------------------------------------
// Desafio

//1.
const perguntar = (obj) =>{
    console.log(obj)
}

const person = {
    nome: prompt("Qual seu nome?"),
    idade: Number(prompt("Qual sua idade?")),
    profissao: prompt("Qual sua profissão?")
}

perguntar(person)

//2.
const escolherFilme = (obj1, obj2) =>{
    return console.log(`O primeiro filme foi lançado antes do segundo ${obj1.anoLancamento > obj2.anoLancamento}.
    O primeiro filme foi lançado no mesmo ano do segundo ${obj1.anoLancamento == obj2.anoLancamento}`)

}

const filme1 = {
    nome: prompt("Escolha um filme?"),
    anoLancamento: Number(prompt("Diga o ano de Lançamento."))
}
const filme2 = {
    nome: prompt("Escolha um outro filme?"),
    anoLancamento: Number(prompt("Diga o ano de Lançamento."))
}

console.log(escolherFilme(filme1, filme2))

//3.
const controlarEstoque = (fruta) => {
    return fruta.disponibilidade = (fruta.disponibilidade != fruta.disponibilidade)
}

controlarEstoque(fruta1)
console.log(carrinho)