//Implement a simple shopping cart program using an array. Create functions to add items
//remove items, and update quantities using the splice method.
//Print the cart's contents after each operation

var shoppingCart:any=[]

function addItem(itemName:string,quantity:number){
    let newItem={itemName,quantity}
    shoppingCart.splice(shoppingCart.length,0,newItem)
}
function removeItems(index:number){
shoppingCart.splice(index,1)
}
function updateQuantity(index:number, newQuantity:number){
    shoppingCart[index].quantity=newQuantity
}
addItem("Jam",2)
addItem("Ketchup",2)
addItem("Sauce",2)
addItem("Bread",2)
console.log(shoppingCart)
removeItems(2)
console.log(shoppingCart)
updateQuantity(2,5)
console.log(shoppingCart)