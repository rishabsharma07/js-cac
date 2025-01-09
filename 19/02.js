//this
const user= {
    name:"rishab",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website`);
        
    }
}
user.welcomeMessage()
user.name = "sam"
user.welcomeMessage()


// console.log(this);

//arrow function

function chai(){
    let username = "hitesh"
    console.log(this.username)
}

chai()

const chai1 = function () {
    let username = "hitesh"
    console.log(this.username);
}

chai1()

const chai2= () => {
    let username = "hitesh"
    console.log(this);
}

chai2()

//function me this use nhi hota... only objects me hota hai


// const addTwoNum= (num1,num2) =>{
//     return num1 + num2
// }

//or

// const addTwoNum= (num1,num2)=> num1 +num2  //when one line code is there when can write it in the same line without {} and return
                                              // it automatically adds return to it
//or

const addTwoNum= (num1,num2)=> (num1 +num2)

//passing object to a function

//we cannot pass {} in a single line function...so we pass () .

// const addTwoNum = (num1, num2) => ({username: "hitesh"})

console.log(addTwoNum(3,4))