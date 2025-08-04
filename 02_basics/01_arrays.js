const myArr=[0,1,2,3,4,5]

/*
console.log(myArr);

myArr.push(6)
console.log(myArr)

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice , splice 

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);
*/

const marvel_heros = ["thor", "ironman", "loki"]

const dc_heros = ["henry da", "batman", "flash"]

marvel_heros.push(dc_heros)

//console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)
//console.log(all_heros);

// much better way of solving this problem 

const allNew_heros = [...marvel_heros, ...dc_heros]
console.log(allNew_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("manas"));

console.log(Array.from("manas"));

let score1 = 100
let score2 = 200 
let score3 = 300
console.log(Array.of(score1,score2,score3));