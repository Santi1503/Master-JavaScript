/**
 * Mostrar todos los numeros impares que hay entre dos numeros que nos de el usuario
 */

let numero1 = parseInt(prompt('Introduce el primer número'))
let numero2 = parseInt(prompt('Introduce el segundo número'))

while (numero1 < numero2) {
    numero1++

    if (numero1 % 2 !== 0) {
        console.log(`El $(numero1) es impar`)
    }
}