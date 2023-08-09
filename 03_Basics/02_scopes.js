// var c = 300;

let a = 300;

if (true) {
    let a = 10;
    const b = 20;
// console.log("Inner: ", a);    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Asif";
    
    function two() {
        const website = "Chai aur Code";
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

// console.log("=====================================");

if (true) {
    const username = "Asif";

    if (username === "Asif") {
        const website = " Yt";
        // console.log(username + website);
    }

    // console.log(website);

}
// console.log(username);

// ============================================

console.log(addOne(2));
function addOne(num) {
    return num +1;
}

addtwo(4)
const addtwo  = function(num){
   return num + 2;

}
