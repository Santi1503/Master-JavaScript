function saludo(nombre, plato){
    console.log("Hola, soy un saludo");
    console.log("Hola " + nombre + ", ¿cómo estás?");
    console.log("¿Te gusta el " + plato + "?");

    return "Saludo saludado"
}

let mensajeFinal = saludo("Juan", "Ceviche")

alert(mensajeFinal())

/*for (let i = 0; i < 5; i++) {
    saludo();
}*/

function calculadora(num1, num2, mostrar = false){
    
    if (mostrar == false) {
        console.log("Suma: " + (num1 + num2));
        console.log("Resta: " + (num1 - num2));
        console.log("Multiplicación: " + (num1 * num2));
        console.log("División: " + (num1 / num2));
        console.log("Módulo: " + (num1 % num2));
    } else {
        document.write("Suma: " + (num1 + num2) + "<br>");
        document.write("Resta: " + (num1 - num2) + "<br>");
        document.write("Multiplicación: " + (num1 * num2) + "<br>");
        document.write("División: " + (num1 / num2) + "<br>");
        document.write("Módulo: " + (num1 % num2) + "<br>");
    }
    

    return true
}

calculadora(7,9)
calculadora(3,5,true)

// Parametros REST

function misPelis (peli1, peli2, ...restoPelis) {
    console.log("Mi primera película es: " + peli1);
    console.log("Mi segunda película es: " + peli2);
    console.log("Y el resto de mis películas son: " + restoPelis);
}

misPelis("El señor de los anillos", "Harry Potter", "El padrino", "El padrino 2", "El padrino 3", "El padrino 4")

// Operador SPREAD

let numeros = [23, 45, 67, 89, 12, 34, 56, 78, 90, 11, 22, 33, 44, 55, 66, 77, 88, 99, 100]

let misNumeros = [...numeros, 44, 26, 99, 12, 34, 56, 78, 90, 11, 22, 33, 44, 55, 66, 77, 88, 99, 100]

let misPelisFav = ["Meteoro", "Bob Esponja"]
misPelis(...misPelisFav, "Spiderman", "Batman", "Superman")
