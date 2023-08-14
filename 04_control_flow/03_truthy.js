const email = "asif@asifraza.ai";

if (email) {
    // console.log("Got the user email");

}
else{
    // console.log("Don't have user email");
}

// falsy values - false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values - "0", 'false', " ", [], {}, function(){}

// Array check
// const emailArr = [];
// if (emailArr.length === 0) {
//     console.log("Array is empty");
// }

// Object check

const obj1 = {};
if (Object.keys(obj1).length === 0) {
    // console.log("Object is empty");
}


// Nullish Coalescing Operator (??): Null and undefined

let val1;

// val1 = 10 ?? 15;
// val1 = null ?? 20;
// val1 = undefined ?? 30;
val1 = undefined ?? 20 ?? 12;

// console.log(val1);

// ternary operator

// conditio ? true : false

const icePrice = 20;
icePrice >10 ? console.log("Valid") : console.log("Invalid");
