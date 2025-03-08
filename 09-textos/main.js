let nombre = "Santiago Gómez de la Torre";

alert(nombre.length);

// Conversion a texto

let num = 1255
alert(num.toString());

// Convertir texto a mayusculas

let web = "sgomez.dev"
alert(web.toUpperCase());

// Convertir texto a minusculas
let web2 = "SGOMEZ.DEV"
alert(web2.toLowerCase());

// Conseguir letra de un texto
let frase = "Aprendiendo JavaScript"
console.log(frase.charAt(6))

// Comprobar si una cadena tiene dentro otra
let slogan = "No soy el mejor programador, pero sé programar"

if (slogan.includes("programar")) {
    console.log("Si está la palabra programar")
} else {
    console.log("No está la palabra programar")
}

// Buscar la posición de una palabra

let mensaje = "Estamos aprendiendo JavaScript"

console.log(mensaje.indexOf("aprendiendo"))

// Extraer parte de un texto

let curso = "Master en JavaScript"
console.log(curso.slice(0, 10))

// Reemplazar parte de un texto
let texto = "Aprendiendo JavaScript"
console.log(texto.replace("Aprendiendo", "Estudiando"))

// Trim o eliminar espacios en blanco
let texto2 = "   Aprendiendo JavaScript   "
console.log(texto2.trim())

// Separar cadena por partes
let texto3 = "Aprendiendo,JavaScript,con,SGomez"
console.log(texto3.split(","))

// Concatenar texto
let ciudad = "Barcelona"
let pais = "España"
let ubicacion = ciudad.concat(" ", pais)

console.log(ubicacion)

// Comienza por una palabra específica
let frase2 = "Aprendiendo JavaScript"
console.log(frase2.startsWith("Aprendiendo"))

// Repetir palabras
let mensajito = "JavaScript esta cabron"
console.log(mensajito.repeat(3))

// Buscar texto en una cadena
let miCadena = "Pablito clavo un clavito"

console.log(miCadena.search("Pablito"))

console.log(miCadena.match("clavo"))