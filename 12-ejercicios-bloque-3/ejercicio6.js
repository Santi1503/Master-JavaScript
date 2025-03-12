/**
 * Crea una funcion que reciba una palabra y devuelva cuantas vocales tiene.
 */

function misVocales(palabra){
    const vocales = "aeiouAEIOU"
    
    let count = 0;

    for(let letra of palabra){
        if(vocales.includes(letra)){
            count++;
        }
    }

    return count
}

let palabra = prompt("Introduce una palabra");
let count = misVocales(palabra);

alert(`La palabra ${palabra} tiene ${count} vocales.`)