//Write a program that uses a while loop to print the first 10 even numbers

var evenCount=0
var number=1
while (evenCount<10){
    if(number%2==0){
    console.log(number)
    evenCount=evenCount+1
    }
number=number+1
}