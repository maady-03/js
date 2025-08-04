// talking about memory allocation
// stack(primitive datatype)  heap(non-primitive datatype)

let myYoutube = "manasverma@gmail.com"

let anotherYt= myYoutube
anotherYt="manas"

console.log(anotherYt);
console.log(myYoutube);

// above one is an example of stack (primitive one)

let userOne = {
    email: "manas@gmail.com",
    id: "12345"
}

let userTwo = userOne
userTwo.email="verma@"
console.log(userOne);
console.log(userTwo);
