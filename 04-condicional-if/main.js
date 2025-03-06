let estaLloviendo = true

if (estaLloviendo == true) {
    alert("Lleva paraguas")
} else {
    alert("No lleves paraguas")
}

// Ejemplo 2

let quieroCebolla = false

if (quieroCebolla) {
    alert("Se pondra Cebolla")
} else if (!quieroCebolla){
    alert("No lleva Cebolla")
}

// Ejemplo 3

let nombre = "Santiago Gómez"
let edad = 22

if (edad >= 18) {
    alert("Es mayor de edad")

    if (edad <= 20) {
        alert("Es un adolescente")
    } else if (edad <= 30) {
        alert("Es un joven")
    } else {
        alert("Es un adulto")
    }
} else {
    alert("No es mayor de edad")
}

// Ejemplo 4

let buenTiempo = true

if (buenTiempo) {
    alert("Vamos a la playa")
} else {
    alert("No vamos a la playa")
}

// Ejemplo 5

let year = 2028

if (year >= 200 && year <= 300) {
    alert("Estamos en la epoca moderna")
} else if (year > 2030){
    alert("Estamos en la epoca post-moderna")
} else {
    alert("Estamos en la epoca antigua")
}

// Ejemplo 6

if (year == 2007 || year == 2017 || year == 2027) {
    alert("El año termina en 7")
} else {
    alert("Año desconocido")
}