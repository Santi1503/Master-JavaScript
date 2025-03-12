/**
 * 1. Pide 6 numeros por pantalla y metelos en un array
 * 2. Muestra el array entero (todos sus elementos)
 * en el cuerpo de la pagina y en la consola
 * 3. Ordenalo y muestralo
 * 4. Invertir su orden y mostrarlo
 * 5. Mostrar cuantos elementos tiene el array
 * 6. Busca uno de los valores que ha metido el usuario,
 * que nos diga si lo encuentra y su indice
 * 7. Refactoriza todo lo posible usando funciones
 */

// Function to get 6 numbers from user
function getNumbers() {
    let numbers = [];
    for(let i = 0; i < 6; i++) {
        let number = parseInt(prompt(`Enter number ${i + 1}:`));
        numbers.push(number);
    }
    return numbers;
}

// Function to display array in page and console
function displayArray(arr, message = 'Array:') {
    console.log(message, arr);
    document.write(`<p>${message} ${arr.join(', ')}</p>`);
}

// Function to sort array
function sortArray(arr) {
    return [...arr].sort((a, b) => a - b);
}

// Function to reverse array
function reverseArray(arr) {
    return [...arr].reverse();
}

// Function to find value in array
function findValue(arr, value) {
    const index = arr.indexOf(value);
    if(index !== -1) {
        return `Value ${value} found at index ${index}`;
    }
    return `Value ${value} not found`;
}

// Main execution
const numbers = getNumbers();

// Display original array
displayArray(numbers, 'Original array:');

// Sort and display
const sortedArray = sortArray(numbers);
displayArray(sortedArray, 'Sorted array:');

// Reverse and display
const reversedArray = reverseArray(numbers);
displayArray(reversedArray, 'Reversed array:');

// Display array length
console.log('Array length:', numbers.length);
document.write(`<p>Array length: ${numbers.length}</p>`);

// Search for a value
const searchValue = parseInt(prompt('Enter a number to search:'));
const searchResult = findValue(numbers, searchValue);
console.log(searchResult);
document.write(`<p>${searchResult}</p>`);
