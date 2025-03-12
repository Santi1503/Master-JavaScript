/**
 * Crea un array con 10 números aleatorios entre 1 y 100.
 * luego, pide al usuario que adivien un numero
 * 
 * Si acierta, muestra un mensaje de celebracion
 * si no, muestra el número correcto
 */

let numeros = Array.from({length: 10}, () => Math.floor(Math.random() * 100) + 1)

let elije = prompt("Elige un número entre 1 y 100")

if (numeros.includes(parseInt(elije))) {
    console.log("¡Felicidades! Has acertado")
} else {
    console.log(`Lo siento, el número correcto era ${numeros[0]}`)
}
