let frameworks = ["Angular", "React", "Vue.js", "Astro"];

for (let i = 0; i < frameworks.length; i++) {
    console.log(frameworks[i]);
}

// Mostrar por pantalla
document.write("<ul>")
for (let i = 0; i < frameworks.length; i++) {
    document.write("<li>" +frameworks[i]+ "</li>")
}
document.write("</ul>")

// Bucles para recorrer arrays
let actores = ["Tom Hanks", "Morgan Freeman", "Leonardo DiCaprio", "Brad Pitt", "Meryl Streep", "Jennifer Lawrence", "Robert De Niro"]

console.log("Listado de actores: ")
for (let i = 0; i < actores.length; i++) {
    //console.log(actores[i])
}

for (let actor of actores) {
    console.log(actor)
}

for (let index in actores){
    console.log(index, actores[index])
}

actores.forEach((actor, index) => {
    console.log(index, actor)
})

let nuevosActores = actores.map(actor => {
    console.log(actor)

    return actor + " - Hollywood"
})

// Arrays multidimensionales

let categorias = ["lucha", "acción", "aventura", "terror", "ciencia ficción"]
let videojuegos = ["Street Fighter", "God of War", "The Legend of Zelda", "Resident Evil", "Mass Effect", "Final Fantasy"]

let juegos = [categorias, videojuegos]

console.log(juegos[0][0])
console.log(juegos[1][4])

// Arrays bidimensionales

let tabla = [
    ["Producto", "Cantidad", "Precio"],
    ["PC", 2, 350],
    ["Smartphone", 1, 150],
    ["Impresora", 1, 100]
]