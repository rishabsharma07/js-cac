//reduce

//it has two parameters accumulator and current value:
//firstly accumulator = initial value 
//then accumulator is: accumulator + current value

// intial accumulator value is defined at the last of the function


const myNums = [1,2,3]

const myTotal= myNums.reduce((acc,currval)=>{
    console.log(`accumulator: ${acc} and current value: ${currval}`)
    return acc + currval
},0)

console.log(myTotal);

//or
// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay= shoppingCart.reduce((acc,curr)=>{
    return acc + curr.price
},0)

console.log(priceToPay);

