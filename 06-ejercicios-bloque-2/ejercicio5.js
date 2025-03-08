/**
 * Muestra la suma y la media de los numeros introducidos
 * hasta introducir un numero negativo y ahi mostrar el resultado
 */

let suma = 0
let numero = 0
let contador = 0

do {
    numero = parseInt(prompt("Dime números hasta que metas un negativo"))

    if (isNaN(numero)) {
        numero = 0
        console.log("No has metido un número")
    } else if (numero >= 0) {
        suma += numero
        contador++
    }

} while (numero >= 0)

console.log(`La suma de los números introducidos es ${suma}`)
console.log(`La media de los números introducidos es ${suma / contador}`)