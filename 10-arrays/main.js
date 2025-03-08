// Arrays are ordered lists of values that can store multiple items of any type

let nombre = "Santiago"
let nombres = ["Santiago", "Juan", "Pedro", "Maria", "Ana", "Luis", "Carlos", "Sofia"]

let pelis = new Array("El señor de los anillos", "El señor de los anillos 2")

console.log(nombres)
console.log(nombres.length)

console.log(pelis)
console.log(pelis.length)

// Acceder a los elementos
console.log(nombres[0])

// Modificar elementos
nombres[0] = "Santi"

// Practica
let elemento = parseInt(prompt("¿Que usuario quieres?", 0))

if (elemento >= nombres.length) {
    alert("No hay usuarios")
} else {
    alert(nombres[elemento])
}
