'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
    let array = [1];
    let i = 2
    while (num !== 1) {
        if (num % i === 0) {
            array.push(i);
            num /= i;
        } else {
            i++;
        }
    }
    return array;
}


function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código: [3,2]
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]; //
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}


function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    for (var i = 0; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1
        while ((j >= 0) && array[j] > temp) {
            array[j + 1] = array[j];
            j--
        }
        array[j + 1] = temp;
    }
    return array;
}


function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código: [3,2,20,15,5]
    for (let i = 0; i < array.length; i++) { //i=2
        let min = i; //0, 1, 2
        for (let j = i + 1; j < array.length; j++) { //j=1, 2, 3
            if (array[j] < array[min]) { //2<3 20<3 15<20
                min = j; //1, 3
            }
        }
        if (min != i) {
            let tmp = array[i]; //2 20
            array[i] = array[min]; //3 15
            array[min] = tmp; //2 20
        }
    }
    return array; //[2,3,15,20]
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    factorear,
    bubbleSort,
    insertionSort,
    selectionSort,
};