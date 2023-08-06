const marvel = ["Ironman", "Thor", "Spiderman"]
const dc = ["Superman", "Flash", "Batman"]

// marvel.push(dc)
// console.log(marvel);

// const newHeros = marvel.concat(dc)
// console.log(newHeros);

// const newMyHeros = [...dc, ...marvel]
// console.log(newMyHeros);

const anotherArr = [1,2,3,4,[5,6,7],8,[7,8,[2,3]]]
const real_anotherArr = anotherArr.flat(Infinity)
console.log(real_anotherArr);

console.log(Array.isArray("Asif"));
console.log(Array.from("Asif"));
console.log(Array.from({name:"Asif"})); // intersting to remember

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));