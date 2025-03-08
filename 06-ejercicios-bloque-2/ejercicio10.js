/**
 * En base al numero que nos de el usuario
 * decirle si es par o impar
 */

let numero = parseInt(prompt("Introduce un número:", 1))

while(isNaN(numero)) {
    numero = parseInt(prompt("Introduce un número:", 1))
}

if (numero % 2 === 0) {
    console.log(`El número ${numero} es par`)
} else {
    console.log(`El número ${numero} es impar`)
}