"use strict";
//Create a function that takes a positive integer as parameter and uses a while loop
//to calculate and return the factorial of that number
function factorial(number) {
    let factorialValue = 1;
    while (number > 1) {
        factorialValue *= number;
        number = number - 1;
    }
    return factorialValue;
}
console.log(factorial(7));
