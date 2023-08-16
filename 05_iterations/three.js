// for of loop

// ["", "", ""]
// [{}, {}, {}]

let arr = [1, 2, 3, 4, 5, 6]

for (const ii of arr) {
    // console.log(ii);
}

const arr1 = "Asif"

for (const j of arr1) {
    // console.log(`each value is ${j}`);
}

//  maps

const map = new Map();
map.set('In', "India");
map.set('JP', "Japan");
map.set('CH', "China");
map.set('In', "India");

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, '=' , value);
}


let myobj = {
    'g1' : "nsf",
    'g2' : "spr"

}

for (const [key, value] of myobj) {
    console.log(key, '--', value);
}