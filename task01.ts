//Create a function that takes an array, an index, and a value as parameters. Inside the function,
//use the splice method to insert the value at the specified index in the array Return the modified 

function addvalue(array:number[],index:number,value:number){
    array.splice(index,0,value)
    return array
}
console.log(addvalue([1,2,3,4,5,6,7,8,9],3,8))