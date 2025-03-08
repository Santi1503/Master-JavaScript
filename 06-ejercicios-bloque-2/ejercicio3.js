/**
 * Tenog un kanguro que salta 3 metros cada vez.
 * Haz un programa que me diga cuantos saltos ha dado el kanguro
 * y cual es la distancia total recorrida tras 17 saltos
 */

let distanciaSaltos = 3
let saltos = 17

let distanciaRecorrida = 0

for (let i = 1; i <= saltos; i++) {
    distanciaRecorrida += distanciaSaltos
    console.log(`Salto ${i}: ${distanciaRecorrida} metros`)
}