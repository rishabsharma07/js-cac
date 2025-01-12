//for of

const arr= [1,2,3,4,5]

for (const element of arr) {
    console.log(element)    
}

const greetings= "Hello world"

for (const greet of greetings) {
    console.log(greet);
    
}


//MAPS
//it is just like object but here no duplicate entries are allowed and the order is maintained

const map= new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('UK',"United Kingdom")
map.set('IN',"India")

console.log(map);

// for (const key of map) {
//     console.log(key);
// }    it will give array of key and value


for (const [key,value] of map) {
    console.log(key, "-", value);
      
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key,value] of myObject) {
//     console.log(key,value);
      
// }


//it will not work on objects as objects are not iterable
