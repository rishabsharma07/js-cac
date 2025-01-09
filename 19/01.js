function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("B");
}

sayMyName()

function addTwoNumbers1(number1, number2){
    console.log(number1+number2)
}
//or
function addTwoNumbers2(number1, number2){
    let result= number1+number2
    return result
}
//or
function addTwoNumbers3(number1, number2){
    return number1+number2  
}

addTwoNumbers1(2,3)
console.log(addTwoNumbers2(3,4));
console.log(addTwoNumbers3(3,5));

function loginUserMessage(username = "sam"){ //default value = sam
    if(!username){      // if not given it will give undefined and undefined is false value so it will not go in the other line so to make it true we use !username which is same as username===undefined .."" is undefined
        console.log("PLease enter a username");
        return            //return ke neeche likha hu execute nhi hota
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("rishab"))
console.log(loginUserMessage())



function calculateCartPrice(val1,val2, ...num1){ ///... is rest operator which takes all the arguments left and makes them an array
    return num1
}
console.log(calculateCartPrice(200,300,500,2000)) //val1= 200 ,val2=300, num1=[500,2000]

const user= {
    name: "rishab",
    id: "abc111"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and id is ${anyObject.id}`);
    
}

handleObject(user)

//or

handleObject({
    name: "abc",
    id: "qw11"
})

const myNewArr= [200,400,600,800]

function returnSecondValue(arr){
    return arr[1] 
}
console.log(returnSecondValue(myNewArr))