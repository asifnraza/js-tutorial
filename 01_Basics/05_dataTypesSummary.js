// Primitive Data Types - call by reference
// 7 types [String, Number, Boolean, null, undefinded, Symbol, BigInt]

const newString = "Asif"
const newNum = 100
const newDecimalNum = 99.44
const isLoggedIn = false
const nullValue = null
let userEmail
const Id = Symbol('123')
const newId = Symbol('123')

// console.log(Id === newId);

// const bigNumber = 72372329932893293298n

// console.log(bigNumber);


// Non Primitive - Call by referance
// Array, Objects, Functions 

const myArray = ["Asif", "Raza", "Engineer"]

const myDetails = {
    name:"Asif",
    age:30
}

const myFun = function(){
    console.log("Hello world");
}

console.log(typeof newString);