/**
 * Dado un array de palabras, cuenta cuántas letras tiene cada palabra 
 * y crea un nuevo array que contenga solo esos numeros
 */

function cuentaLetras (datos) {
    let nuevosDatos = datos.map(elemento => elemento.length)
    return nuevosDatos
}

const frutas = ["Naranja", "Plátano", "Fresa", "Mango", "Pera"]

const luchadores = ["Hulk", "Khabib", "McGregor", "Nurmagomedov", "Fury"]

console.log(cuentaLetras(frutas))
console.log(cuentaLetras(luchadores))