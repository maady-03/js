/*
const user = {
    username : "manas",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcomes you`);
        console.log(this);
    }
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()
console.log(this);

function chai(){
    console.log(this);
}
chai()
*/
  
const chai = () => {        // arrow function
    let username = "ujjwal"
    console.log(this.username);
}

chai()

const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,4));

const addThree = (num1,num2,num3) => num1+num2+num3
console.log(addThree(1,2,2));
