/**
 * Muestra todos los numeros divisores de un numero que se mete en un prompt
 */

let numero = parseInt(prompt("Introduce un número:", 1))

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        console.log(`El número ${i} es divisor de ${numero}`)
    }
}