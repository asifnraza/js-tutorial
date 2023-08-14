// if condition

const isLoggedIn = true;

if (2!=3) {
    // console.log("Executed");
}

const temp = 51;

if (temp <50) {     
    // console.log("Temp less than 50");
}
else
{
    // console.log("Temp more than 50");
}

// console.log("Execute");

// <, >, <=, >=, ==, ===, !=, !==


const score = 200;

if (score > 100) {
    const power = "fly";
    // console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`);


// short hand code - implicit scope


const bal = 1000;

// if(bal > 500) console.log("test"), console.log("test2");


// if (bal < 500) {
//     console.log("Less then 500");
// }
// else if (bal < 750) {
//     console.log("Less then 750");
    
// }
// else if (bal < 900) {
//     console.log("Less then 900");
    
// }
// else{
//     console.log("Less then 1200");

// }


const userLoggedIn = true;
const debitCard = true;
const isLoggedInfromGoogle = false;
const isLoggedInfromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");     
}

if (isLoggedInfromEmail || isLoggedInfromGoogle && debitCard) {
    console.log("Logged In successfully");
}