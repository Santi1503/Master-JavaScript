/**
 * Tengo una heladería y cada bola de helado vale 1.8
 * Cuanto cuestan los cucuruchos de 1, 2 y 3 bolas?
 * ten en cuenta que el cucurucho cuesta 0.5
 */

const bolaHelado = 1.8
const cucurucho = 0.5

let heladoUnaBola = bolaHelado + cucurucho
let heladoDosBolas = 2*bolaHelado + cucurucho
let heladoTresBolas = 3*bolaHelado + cucurucho

alert(`El precio de las helados consecutivamente sería: ${heladoUnaBola}, ${heladoDosBolas}, ${heladoTresBolas}`)