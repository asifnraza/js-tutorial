// const mynums = [1, 2, 3]

// const myTotal = mynums.reduce((acc, currval) => {
//     console.log(`Acc: ${acc} and currVal: ${currval}`)
//     return acc + currval
// }, 0)

// console.log(myTotal);

const cart = [
    {
        itemName: "JS Course",
        Price: 2999
    },
    {
        itemName: "PY Course",
        Price: 1999
    },
    {
        itemName: "CSS Course",
        Price: 499
    },
    {
        itemName: "App Dev Course",
        Price: 5999
    },
    {
        itemName: "Devops Course",
        Price: 7999
    }
]

const totalPrice = cart.reduce((acc, item) => acc + item.Price, 0)
console.log(totalPrice);