// singleton
// object.create - constructor

// object literals

const mySym = Symbol("Key1")

const jsUser = {
    name : "asif",
    "fullname" : "Asif Raza",
    [mySym] : "key2",
    age : 28,
    location : "Delhi",
    email : "asif@gmail.com",
    isLoggedIn : false,
    lastLoggedInDay : ["Monday", "Tuesday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullname"]);
// console.log(jsUser[mySym]);

jsUser.email = "raza@gmail.com"

// Object.freeze(jsUser)

jsUser.email = "ws@gmail.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.fullname}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

