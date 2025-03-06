/**
 * El otro dia fui con mi amigo pepe y manolo a un restaurante de smash burguer
 * Yo me comi 2, pepe se comio 3 y manolo 6
 * Cuantas hamburguesas nos comimos en total?
 * 
 * Es cierto que yo comi menos que pepe?
 */

const hamburguesasYo = 2;
const hamburguesasPepe= 3
const hamburguesasManolo = 6;

const hamburguesasTotales = hamburguesasYo + hamburguesasPepe + hamburguesasManolo;

const yoComiMenosQuePepe = hamburguesasYo < hamburguesasPepe;

alert(`Total de hamburguesas: ${hamburguesasTotales} | Yo comi menos que Pepe: ${yoComiMenosQuePepe}`);