/**
 * Crea una funcion que reciba un numero y devuelva su factorial
 */

function factorial(number) {
    // Base case: factorial of 0 or 1 is 1
    if (number === 0 || number === 1) {
        return 1;
    }
    
    // Calculate factorial using recursion
    return number * factorial(number - 1);
}

// Example usage:
console.log(factorial(5)); // Output: 120
