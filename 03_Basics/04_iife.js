// Immediately Invoked Function Expressions - IIFE

// function chai() {
//     console.log(`DB CONNECTION`);       
// }

// chai()

(function chai() {
    // named iffe
    console.log(`DB CONNECTION`);       
})();

( (name) => {
    // unnamed iife
    console.log(`DB Connected, ${name}`);
})("Asif");

