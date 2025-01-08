// singleton
// Object.create (when we create object by this, it is known as singleton)

// object literals:

const mySym= Symbol("key1")

const JsUser={
    name: "Rishab",
    "full name": "Rishab Sharma",
    [mySym]: "mykey1", //to use symbol in object, we put the symbol in sqaure brackets
    age: 19,
    location: "Delhi",
    email: "rishab@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}

console.log(JsUser.email);
console.log(JsUser["full name"]); //when key is in "", we have to use [] to access it
// console.log(JsUser.full name); //will give error
console.log(JsUser[mySym]); //to access symbol

JsUser.email = "rishab@microsoft.com"
console.log(JsUser)

// Object.freeze(JsUser) //to freeze the object and now no changes can be done

JsUser.greeting= function(){
    console.log("hello user");
}

JsUser.greeting2= function(){
    console.log(`hello user , ${JsUser.name}`);  
}
//or
JsUser.greeting3= function(){
    console.log(`hello user , ${this.name}`);  //this is used when we have to access an element in the exising object in a function
}
console.log(JsUser.greeting()) 
console.log(JsUser.greeting2()) 
console.log(JsUser.greeting3()) 
