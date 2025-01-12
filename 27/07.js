// .map
// it traverse through the whole array and do the function and return the value

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums= myNumbers.map((num)=> num*10+1)

// console.log(newNums);

//chaining

const newNums1= myNumbers
.map((num)=> num * 10)
.map((num)=>num + 2)
.filter((num)=> num >=40)

console.log(newNums1);
