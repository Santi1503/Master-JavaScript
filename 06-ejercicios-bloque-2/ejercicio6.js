/**
 * Escribe un programa que muestre la tabla de multiplicar del 
 * numero que te diga el usuario
 */

let numero = parseInt(prompt("Introduce un numero:"))

let resultadoCompleto = "TABLA DEL " + numero + "\n"

for (let i = 0; i < 10; i++) {
    let multiplicacion = i * numero

    resultadoCompleto += `${numero} x ${i} = ${multiplicacion}\n`
}

console.log(resultadoCompleto)
alert(resultadoCompleto)