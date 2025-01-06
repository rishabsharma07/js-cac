console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2<=1)
console.log(2==1)
console.log(2!=1)


console.log("2">1); //converts 2 into number
console.log(1>"02");


console.log(null > 0);  //comparisons convert null into a number, treating as 0
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);   //undefined not convert and always gives false

// === 

console.log("2"==2); //doesnt checks data type and only checks the value
console.log("2"===2); // it checks data type as well as value
console.log(2===2);
