const arr= [1,2,3,4,5]
const names= ["rishab", "sharma", "aman"]

const arr2= new Array(1,2,3)

console.log(arr[2]);

// arr.push(6)
// arr.push(7)
// console.log(arr);
// arr.pop()
// console.log(arr);

arr.unshift(9) //push in front and removes the last element
console.log(arr)

arr.shift() //removes the element provides in unshifted i.e front element
console.log(arr)

console.log(arr.includes(9));
console.log(arr.indexOf(3));    

const newArr= arr.join() //make the arr into string...means the type will be now string
console.log(newArr);

// slice, splice

console.log("A ", arr);

const myn1 = arr.slice(1, 3) //it doesnt includes the last index and gives the elements of the index defined

console.log(myn1);
console.log("B ", arr);


const myn2 = arr.splice(1, 3) //it includes the last index too and the elements of the defined index is removed from the original array
console.log("C ", arr);
console.log(myn2);

 