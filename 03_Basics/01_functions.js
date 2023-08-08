
function sayHello(){
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}

// sayHello()

// function sum(a, b) {  // parameters (a, b)
//     console.log(a+b);
// }
function sum(a, b) {  // parameters (a, b)
    // let result = a + b;
    // return result
    // after return any line of code will not execute

    return a+b;

    console.log("asif");
}

const result = sum(3, 5) // arguments/values (3, null)
// console.log("Result is ", result);


function loginmessage(username = "Raza"){
    if (!username) {
        console.log("Please enter username");
        return
    }

    return `${username}, just logged in`;
}

const msg = loginmessage();
// console.log(msg);

function calculateCartPrice(val1, val2, ...num) {
    return num
}

// console.log(calculateCartPrice(100, 200, 300, 400, 500, 600, 700));


const user = {
    username: "Asif",
    prices: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}

// handleObject(user);

// handleObject({
//     username: "Sam",
//     price: 299
// })

const myArr = [100, 200, 350, 10, 430]

function secondValueofArray(getArray) {
    console.log(getArray[1]);    
}
// secondValueofArray(myArr)

secondValueofArray([200, 300, 400])