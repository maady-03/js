const name="manas"
const age=21

console.log(`my name is ${name} and my age is ${age}`);

// another way to declare the string

const gameName = new String('manas hc')

console.log(gameName.toString());
console.log(gameName[0]);

console.log(gameName.length);

console.log(gameName.toUpperCase());

// to find in which index/position the particular charcter is
console.log(gameName.indexOf('a'));

// to find in which char lie in the given index 
console.log(gameName.charAt(2));


// dividing it to substring

const newString=gameName.substring(0,4)
console.log(newString);

const anothernewString=gameName.slice(-5,4)
console.log(anothernewString);

//replacing and triming

const sirname="   verma    "
console.log(sirname.trim());

const url="https://whatthe%2heck"
console.log(url.replace('%2',''));

// we can also ask whether the given word is ther or not

console.log(url.includes('whatthe%2heck'));

console.log(gameName.split('-'));