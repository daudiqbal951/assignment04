"use strict";
//Write a program having an array of numbers if the number is negative it should
//remove the negative number from the array
var numberArray = [-5, -5, -3, 3, -1, 1, 0];
var index = 0;
while (index < numberArray.length) {
    if (numberArray[index] < 0) {
        numberArray.splice(index, 1);
        index--;
    }
    else {
        index = index + 1;
    }
}
console.log(numberArray);
