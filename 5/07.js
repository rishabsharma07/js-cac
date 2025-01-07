let myDate= new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate= new Date(2025,0,7, 8, 5)
let myCreatedDate1= new Date("2025-01-07")
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate1.toLocaleString());

let myTimestamp= Date.now()  //same as new Date

console.log(myTimestamp); //from jan 1970 to present in miliseconds
console.log(myCreatedDate1.getTime()); //from jan 1970 to date mentioned in miliseconds 
console.log(Math.floor(Date.now()/1000)); //in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());



