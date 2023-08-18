//Create a function that takes an array of numbers as parameter. Use a while loop to calculate
//and return the sum of all the numbers in the array

function sumArray(arrayNumbers:number[]){
    let index=0
    let sum=0
    while(index<arrayNumbers.length){
    sum=sum+arrayNumbers[index]
     index=index+1   
    }
return sum
}
var sumOfArrayNumbers=sumArray([1,2,3,4,5,6,7,8,9,10])
console.log(sumOfArrayNumbers)
