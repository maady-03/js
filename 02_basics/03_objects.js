/* //  this i have declared objects as a singleton
const tinderUser = new Object()
console.log(tinderUser);

// and this declaration is non singleton object

const tinderUser_two = {}
console.log(tinderUser_two);

// dono ka output same hi niklega 
*/

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"manas",
            lastname:"verma"
        }
    }
}

console.log(regularUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

const users =[
    {
    id:"1",
    email:"@gmail.com"
},
{

},
{

},
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnPrope('isLoggedIn'));

