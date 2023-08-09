const user = {
    username: "Asif",
    price: 999,

    welcomeMSG: function () {
        console.log(`${this.username} , Welcome to the website`);
        // console.log(this);
    }

}
// console.log(user);

// user.welcomeMSG();
// user.username = "SAM";
// user.welcomeMSG();
// console.log(this);

//  function tea() {
//     let username = "Asif";
//     console.log(this.username);
//  }
// tea();

// const tea = function () {
//         let username = "Asif";
//         console.log(this.username);
//      }

// const tea = () => {
//     //         let username = "As
//         let username = "Asif";
//         console.log(this);
//      }
//     tea();

// explicit return
// const addtwo = (num1, num2) => {
//     return num1 + num2;
// }

// implicit return
// const addtwo = (num1, num2) => num1 + num2;
// const addtwo = (num1, num2) => (num1 + num2);

// return arrow fucntion with object
const addtwo = (num1, num2) => ({username: "Asif"});
console.log(addtwo(3, 5));


