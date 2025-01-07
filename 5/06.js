//NUMBER
const score=100
console.log(score);

const balance = new Number (400)   //gives the object of number
console.log(balance); 

console.log(balance.toString().length)  //toString converts into string and then we can use string functions such as length
console.log(balance.toFixed(2)); //it is for after decimal places

const newNum= 123.8966

console.log(newNum.toPrecision(5)); //rounds off

const zeroes= 100000000
console.log(zeroes.toLocaleString()); //put comma in between

//MATHS

console.log(Math); //Math object

console.log(Math.abs(-5)) //makes the number positive
console.log(Math.round(4.6)) //rounds off the number
console.log(Math.floor(4.3))
console.log(Math.floor(4.9))//makes it to the ceiling value i.e the smallest integer value that comes before the number 
console.log(Math.ceil(4.3))
console.log(Math.ceil(4.9))//make it to floor value i.e the greater number after that value

console.log(Math.min(4,3,7,9)) //gives min number among these
console.log(Math.max(4,3,7,9)) //gives max number among these

console.log(Math.random()) //gives a random number from  0 to 1
console.log(Math.floor(Math.random()*10) +1) //gives a random number from 1 to 10

const min= 10
const max= 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //gives a random number from min and max limit



