/*
// this is called definition of a function
function sayMyName (){
    console.log("m");
console.log("a")
console.log("n")
console.log("a")
console.log("s")
}

sayMyName() // calling of a function

function add(no1,no2){
    let result = no1+no2
    return result
}

const result = add(5,3)
console.log("result :",result);
*/

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400));

const user = {
    username : "manas",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)