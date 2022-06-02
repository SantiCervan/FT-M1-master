'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    if (array.length <= 1) return array;
    let pivote = array[0]; // let pivote = array [Math.floor(Math.random() * array.length)] Agarra una posición random
    let arrayIzq = [];
    let arrayDer = [];
    for (let i = 1; i < array.length; i++) { //for (let i = ----->0<----; i < array.length; i++) {
        if (array[i] < pivote) {
            arrayIzq.push(array[i]);
        } else {
            arrayDer.push(array[i]);
        }
    }
    return quickSort(arrayIzq).concat(pivote, quickSort(arrayDer))
}

function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    if (array.length <= 1) return array
    let mid = Math.floor(array.length / 2)
    let arrayIzq = mergeSort(array.slice(0, mid))
    let arrayDer = mergeSort(array.slice(mid, array.length))
    let sortedArr = []
    while (arrayIzq.length && arrayDer.length) {
        if (arrayIzq[0] < arrayDer[0]) {
            sortedArr.push(arrayIzq.shift())
        } else {
            sortedArr.push(arrayDer.shift())
        }
    }
    return [...sortedArr, ...arrayIzq, ...arrayDer]
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    quickSort,
    mergeSort,
};