
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
console.log("Result is ", result);


function loginmessage(username = "Raza"){
    if (!username) {
        console.log("Please enter username");
        return
    }

    return `${username}, just logged in`;
}

const msg = loginmessage();
console.log(msg);