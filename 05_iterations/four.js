const myobj = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby"
}

for (const key in myobj) {
    // console.log(`${key} is ${myobj[key]}`);
}

const programming = ["py", "js", "cpp"]

for (const key in programming) 
{
    // console.log(programming[key]);
}


// map is not iteratable

const map = new Map();
map.set('In', "India");
map.set('JP', "Japan");
map.set('CH', "China");
map.set('In', "India");

for (const key in map) {
    // console.log(map[key]);
}

