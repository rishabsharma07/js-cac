//if- else if - else

const loggedIn= true

if (loggedIn){  //isme true wali statements run kregi
    console.log("Executed");   
}

const temperature = 40

if(temperature==40){
    console.log("temp less than 50");    
}
else{
    console.log("temperature greater than 50");
    
}

const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");  //to write in a single line but not preffered

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 900");
    
} else {
    console.log("less than 1200");

}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {  //and operator.. both conditions must be true
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { //or operator..one out of two conditions should be true
    console.log("User logged in");
}