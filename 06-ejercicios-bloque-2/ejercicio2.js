/**
 * Progama que pida dos numeros y que nos diga cual es el mayor, el menos y si son iguales
 * PLUS: si los numeros no son un numero o son menores o iguales a cero,
 * nos lo vuelva a pedir
 */

let num1 = parseInt(prompt("Dime un numero: ", 0))
let num2 = parseInt(prompt("Dime otro numero: ", 0))

while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt("Dime un numero: ", 0))
    num2 = parseInt(prompt("Dime otro numero: ", 0))
}

if (num1 > num2) {
    alert(`${num1} es mayor que ${num2}`)
} else if (num1 < num2) {
    alert(`${num1} es menor que ${num2}`)
} else if (num1 === num2) {
    alert(`${num1} es igual que ${num2}`)
}
