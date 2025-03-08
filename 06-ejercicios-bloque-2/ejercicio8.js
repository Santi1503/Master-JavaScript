/**
 * Tenemos una coleccion de numeros desde el 1 al 17
 * 
 * El usuario tiene que adivinar cual es el elegido
 * 
 * Haz un programa para que pueda adivinar el numero
 */

const numeroAdivinar = 7

let intentos

while (intento != numeroAdivinar){
    intento = parseInt(prompt("Adivina el numero"))
    if (intento < numeroAdivinar) {
        console.log("El numero es mayor")
    } else if (intento > numeroAdivinar) {
        console.log("El numero es menor")
    } else {
        console.log("Has acertado")
    }
}