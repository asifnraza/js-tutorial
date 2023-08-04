const myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

console.log(typeof myDate);

let createdDate = new Date(2023, 2, 29, 14, 39)
console.log("+++++++++++++++++++++");
console.log(createdDate.toDateString());
console.log(createdDate.toLocaleDateString());
console.log(createdDate.toLocaleString());

let crDate = new Date("01-28-2020")
console.log(crDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(crDate.getTime());

console.log(crDate == myTimeStamp);
console.log("-------------------");
console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000))

console.log("-------------------");


let tryDate = new Date()
console.log(tryDate.getDate());
console.log(tryDate.getFullYear());

console.log(tryDate.toLocaleString('defaukt', {
    weekday: "long"
}))