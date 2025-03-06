// Ejercicio 1 -  Calcular cuantas horas le llevaria llegaar a la luna a una nave
// espacial y guarda el resultado en una variable. La nave va a 1225 KM/H y la luna esta a 384.400 KM

let distancia = 384400
let velocidad = 1225

let horas = distancia / velocidad

alert("La nave tarda: " + Math.ceil(horas) + " horas en llegar")