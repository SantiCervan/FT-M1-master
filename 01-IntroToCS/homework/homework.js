'use strict'

function BinarioADecimal(num) {
    // tu codigo aca
    let nuevoArray = num.split('').reverse();
    let suma = 0
    for (let i = 0; i < nuevoArray.length; i++) {
        suma = suma + nuevoArray[i] * (2 ** i)
    }
    return suma
}


function DecimalABinario(num) {
    // tu codigo aca
    let nuevoArray = []
    while (num != 0) {
        let div = Math.floor(num / 2)
        let residuo = parseInt(num % 2)
        num = div
        nuevoArray.push(residuo)
    }
    return nuevoArray.reverse().join('')
}

module.exports = {
    BinarioADecimal,
    DecimalABinario,
}