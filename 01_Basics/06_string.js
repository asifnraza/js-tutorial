const name = "asif"
const myScore = 73


// console.log(`My name is ${name} and my score is ${myScore}`);


let myName = new String('AsifRaza')

console.log(myName[1]);
console.log(myName.toUpperCase());
console.log(myName.charAt(3));
console.log(myName.indexOf('i'));

const newString = myName.substring(2, 4)

console.log(newString);

const newValue = myName.slice(-8, 5)
console.log(newValue);

const newTrim = "   Welecome     "
console.log(newTrim.trim());

const url = "https://asif raza.com"
console.log(url.replace(' ', '-'));

const convertInArray = "Asif-Raza-Delhi"
console.log(convertInArray.split('-'));