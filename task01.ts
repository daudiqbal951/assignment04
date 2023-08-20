//Create a function that takes an array, an index, and a value as parameters. Inside the function,
//use the splice method to insert the value at the specified index in the array Return the modified 

var testArray:number[]=[1,2,3,4,5,6,7,8,9]

function addvalue(array:number[],index:number,value:number){
    array.splice(index,0,value)
    return array
}

console.log(addvalue(testArray,3,8))