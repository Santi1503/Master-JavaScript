/**
 * Un DJ no sabe que genero musical poner en la fiesta
 * Preguntale al usuario que genero quiere
 * Según lo que prefiera devuelvele un mensaje diferente
 */

let genero = prompt('¿Qué genero musical quieres escuchar?')

switch (genero.toLowerCase()) {
    case 'rock':
        alert('¡Vamos a rockear!')
        break
    case 'pop':
        alert('¡Vamos a bailar!')
        break
    case 'reggaeton':
        alert('¡Vamos a perrear!')
        break
    default:
        alert('No me has dicho un género que conozca, ¡pero vamos a bailar igual!')
}