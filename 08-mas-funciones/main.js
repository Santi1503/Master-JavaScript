// Funciones anonimas

const saludo = function() {
    console.log("Hola desde una funcion anonima");
}

saludo();

/*setInterval(function() {
    console.log("Hola desde un intervalo");
}, 1000);*/

setInterval(saludo, 1000)

// Funciones de Callback

function restame(num1, num2, mostrar, multiplicarPor3) {
    let resta = num1 - num2;
    mostrar(resta);
    multiplicarPor3(resta);
}

restame(20, 5, function(resultado) {
    console.log("El resultado es: " + resultado);
},
function(resultado) {
 console.log(resultado * 3);
})

// Ambito variables

let ruta = "sgomez.dev"

function mostrarRuta() {
    let ruta = "sgomez.dev/portfolio";
    console.warn(ruta);
}

console.log(ruta);
mostrarRuta();

if (true) {
    let deporte = "golf"
    console.log(deporte);
}

// Funciones de flecha

let nuevoCurso = () => {
    console.log("Nuevo curso de JavaScript");
}

nuevoCurso();

setTimeout(() => {
    console.log("Hola desde un intervalo");
}, 1000)

