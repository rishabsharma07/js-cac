// falsy values:

// false, 0, -0, BigInt 0n, "", null, undefined, NaN



//truthy values:

// "0", 'false', " ", [], {}, function(){}

// truthy values are the values which are considered to be true and falsy values are the values which are considered to be false




//empty array check
const userEmail = []   //truthy value

if (userEmail.length === 0) {                       
    console.log("Array is empty");
}
//empty object check
const emptyObj = {}   //truthy value

if (Object.keys(emptyObj).length === 0) {  //object.keys() return array of keys which can be checked by length
    console.log("Object is empty");
}
