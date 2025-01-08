const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //it push the whole array in the existing array and not its element
console.log(marvel_heros) 
// console.log(marvel_heros[3][2]) 

const allHeroes= marvel_heros.concat(dc_heros) //it join the two array element by element
console.log(allHeroes);
//or 

const allNewHeroes= [...marvel_heros,...dc_heros] //known as spread operator; can be used with as many as arrays
console.log(allNewHeroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // makes all the elements into a single array
console.log(real_another_array);

console.log(Array.isArray("Rishab")); //checks whether its an array or not
console.log(Array.from("Rishab")); //converts the string into array
console.log(Array.from({name: "rishab"})) //it returns a empty array as in this we have to specify whether we have to make the array of keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //same as from and makes it an array but it is used when we have many elements or set of elements
//from is used when we are dealing with iterable objects (like strings, sets, or arrays)
//of is used when we are dealing with individual values