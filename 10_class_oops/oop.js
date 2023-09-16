// const user = {
//     username: "Asif",
//         loginCount: 8,
//         signinID: true,

//         getUserDetails: function () {
//             // console.log('Got user details from DB');
//             // console.log(`Username: ${this.username}`);
//             console.log(this);
//         }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function user (username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new user("asif", 12, true) // call constructor function using new keyword
const userTwo = new user("test", 3, false)

console.log(userOne);
console.log(userTwo);
