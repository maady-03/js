let score= "33abc"

console.log(typeof score); // tells about the datatype

let valueInNumber = Number(score) // to convert any dattype to a int type
console.log(typeof valueInNumber);
console.log(valueInNumber);

// 33abc is converted to a number but jb hmne output nikala toh NaN aya i.e, not a number 
// if putiing let score = null , it will give us output 0
// if putting let score = undefined , it will give us output as NaN
// and true output to be 1 and false to be 0

let isLoggedIn = 0
let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanisLoggedIn);
console.log(booleanisLoggedIn);

//"" => false 
//"manas" => true