// Interpretação de código
/* 
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  }) */

//1A - Irá ser impressora primeiramente o prrimeiro objeto comppleto do array, depois será informado o indice do array e por ultimo o array completo, isso será repetido até finalizar o array.

/* 
const usuarios = [{
        nome: "Amanda Rangel",
        apelido: "Mandi"
    },
    {
        nome: "Laís Petra",
        apelido: "Laura"
    },
    {
        nome: "Letícia Chijo",
        apelido: "Chijo"
    },
]

const novoArrayB = usuarios.map((item, index, array) => {
    return item.nome
})

console.log(novoArrayB) */

//2A - Irá ser impresso o array completo, porem apenas a propriedade do objeto nome. Ex.: ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

/* 
const usuarios = [{
        nome: "Amanda Rangel",
        apelido: "Mandi"
    },
    {
        nome: "Laís Petra",
        apelido: "Laura"
    },
    {
        nome: "Letícia Chijo",
        apelido: "Chijo"
    },
]

const novoArrayC = usuarios.filter((item, index, array) => {
    return item.apelido !== "Chijo"
})

console.log(novoArrayC) */

//3B - Irá ser impresso todos os dois objetos completo menos o que tem a propriedade apelido: Chijo.
// _________________________________________________________________________________________________________________________

// Escrita de Código.

const pets = [{
        nome: "Lupin",
        raca: "Salsicha"
    },
    {
        nome: "Polly",
        raca: "Lhasa Apso"
    },
    {
        nome: "Madame",
        raca: "Poodle"
    },
    {
        nome: "Quentinho",
        raca: "Salsicha"
    },
    {
        nome: "Fluffy",
        raca: "Poodle"
    },
    {
        nome: "Caramelo",
        raca: "Vira-lata"
    },
]




//1A 
const trazerApenasNome = pets.map((array) => {
    return array.nome
})

console.log(trazerApenasNome)






//1B
const mostrarSalsicha = pets.filter((array) => {
    return array.raca === 'Salsicha'
})

console.log(mostrarSalsicha)






//1C
const buscarPoodle = pets.filter((array) => {
    return array.raca === 'Poodle'
})

const enviarMensagem = buscarPoodle.map((array) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${array.nome}!`
})

console.log(enviarMensagem)


const produtos = [{
        nome: "Alface Lavada",
        categoria: "Hortifruti",
        preco: 2.5
    },
    {
        nome: "Guaraná 2l",
        categoria: "Bebidas",
        preco: 7.8
    },
    {
        nome: "Veja Multiuso",
        categoria: "Limpeza",
        preco: 12.6
    },
    {
        nome: "Dúzia de Banana",
        categoria: "Hortifruti",
        preco: 5.7
    },
    {
        nome: "Leite",
        categoria: "Bebidas",
        preco: 2.99
    },
    {
        nome: "Cândida",
        categoria: "Limpeza",
        preco: 3.30
    },
    {
        nome: "Detergente Ypê",
        categoria: "Limpeza",
        preco: 2.2
    },
    {
        nome: "Vinho Tinto",
        categoria: "Bebidas",
        preco: 55
    },
    {
        nome: "Berinjela kg",
        categoria: "Hortifruti",
        preco: 8.99
    },
    {
        nome: "Sabão em Pó Ypê",
        categoria: "Limpeza",
        preco: 10.80
    }
]



//2A
const nomeArray = produtos.map((array) => {
    return array.nome
})

console.log(nomeArray)




//2B
const produtoComDesconto = produtos.map((array) => {
    return {
        nome: array.nome,
        preco: (array.preco - (array.preco * 0.05)).toFixed(2)
    }

})

console.log(produtoComDesconto)





//2C
const buscarBebidas = produtos.filter((array) => {
    return array.categoria === 'Bebidas'
})

console.log(buscarBebidas)



//2D
const consultarProdutos = produtos.filter((array) => {
    return array.nome.includes("Ypê")
})

console.log(consultarProdutos)




//2E
const comprar = produtos.filter((array) => {
    return array.nome.includes("Ypê")
})

const enviarMensagemComprar = comprar.map((array) => {
    return `Compre ${array.nome} por ${array.preco}`
})

console.log(enviarMensagemComprar)