/**
 * Crea un array de personajes de películas y 
 * clasificalos en grupos
 * 
 * Muestra un mensaje para cada grupo
 */

const personajes = [
    "V:Joker",
    "H:Batman",
    "V:Thanos",
    "H:Spider-Man",
    "V:Green Goblin",
    "H:Iron Man",
    "V:Venom",
    "H:Captain America"
]

let heroes = personajes.filter(personaje => personaje.startsWith("H:"))
let villanos = personajes.filter(personaje => personaje.startsWith("V:"))

console.log(`Los héroes son: ${heroes.join(", ")}`)
console.log(`Los villanos son: ${villanos.join(", ")}`)

heroes.forEach(heroe => {
    console.log(heroe.split(":")[1] + " es un héroe")
})

villanos.forEach(villano => {
    console.log(villano.split(":")[1] + " es un villano")
})