~~~~javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let numeroSomado = 0;
    for (let i = 0; i < arrayDeNumeros.length; i++) {
      numeroEscolhido === arrayDeNumeros[i] ? numeroSomado += 1: false
    }
    return numeroSomado === 0 ? `Número não encontrado` : `O número ${numeroEscolhido} aparece ${numeroSomado}x`
}
~~~~