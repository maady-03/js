// Singleton
// object.create    (a way to declare an object)

//pbject literals 

const mySym = Symbol("key1")


const JSuser = {
    name: "Manas",
    age: 19,
    //mySym : "mykey1",
    [mySym] : "mykey1",
    "full name" : "Manas Verma",
    loaction: "Haldwani",
    email: "manas@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays","Saturday"]
}

/* console.log(JSuser.email);
console.log(JSuser["full name"]); // this is neccessary to use [""] because hmne uppr "full name" krkw declare kiya h aur agr .full name krunga toh error dega

//console.log(JSuser.mySym);

console.log(JSuser[mySym]);
console.log(typeof JSuser[mySym]);

JSuser.email = "manasverma.ac.in"
Object.freeze(JSuser)
console.log(JSuser);
*/

JSuser.greetings = function(){
    console.log("Hello JS user");
}

console.log(JSuser.greetings());

JSuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JSuser.greetings());
console.log(JSuser.greetingTwo());