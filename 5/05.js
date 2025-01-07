const name= "rishab"
const repoCount= 5

console.log(name + repoCount);

//or

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const str= new String ("rishab.com") //we can make string by this method too.. here we get the string as object

console.log(str[0]);

console.log(str.length);

console.log(str.toUpperCase());

console.log(str.charAt(2));
console.log(str.indexOf("i"));

const newstr= str.substring(0,4)
console.log(newstr);

const anotherStr= str.slice(-8,4) //just as substring but can also give -ve values
console.log(anotherStr);

const newStrOne= "        rishab          "

console.log(newStrOne.trim());

const url= "rishab@google.com"

console.log(url.replace("@", "%20"));

console.log(url.includes("rish"));

console.log(str.split(".    "))







