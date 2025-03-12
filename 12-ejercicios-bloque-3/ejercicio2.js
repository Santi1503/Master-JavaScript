/**
 * Crea un array de ingredientes para una receta absurda
 * (como una pizza con chocolate y piña)
 * 
 * Muestra la receta completa en una frase divertida
 */

const ingredientes = ["Masa de pizza", "chocolate", "queso", "piña", "sal", "azúcar", "aceite de oliva"];
const receta = `¡Prepárate para el desastre! Haz una pizza con ${ingredientes[1]} y ${ingredientes[3]} encima de una base de ${ingredientes[0]} y ${ingredientes[2]}. Espolvorea un poco de ${ingredientes[5]} y ${ingredientes[4]} por encima y añade un chorrito de ${ingredientes[6]} para darle un toque especial. ¡Disfruta de tu pizza absurda!`;
const receta2 = `Receta 2: ${ingredientes.join(", ")}`

document.write(receta);
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write(receta2);