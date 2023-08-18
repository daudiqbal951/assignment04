"use strict";
//Implement a program that takes a list of temperatures in Celsius as input from the user
//Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and
//store the converted temperatures in an array. Use a while loop to
//perform the conversion for each temperature
var farArray = [];
function celciusToFarenh(celArray) {
    let index = 0;
    while (index < celArray.length) {
        farArray[index] = (celArray[index] * 9 / 5) + 32;
        index = index + 1;
    }
}
var celArray = [10, 20, 30, 40, 50];
celciusToFarenh(celArray);
console.log(farArray);
