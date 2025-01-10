// Nullish Coalescing Operator (??)
//used for null and undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

//it checks and prints the first value and if the first value is null or undefined, it goes to the second value


console.log(val1);


//terniary operator:
// condition ? true : false

const price= 100

price<=80 ? console.log("less than 80") : console.log("greater than 80")


