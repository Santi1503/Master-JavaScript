/**
 * En mi tienda de videojuegos tenemos una oferta
 * si compras un juego de 50 o mas, te hacemos un 20% de descuento
 * Si un cliente compra el Tekken 15 que cuesta 50, en cuanto le queda?
 */

let precio = 50;
let descuento = 0.2;

let precioFinal = precio - (precio * descuento);

alert("El juego quedaría en: " + precioFinal + " Euros")