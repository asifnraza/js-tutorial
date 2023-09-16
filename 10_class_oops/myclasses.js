// ES6

class user {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai", "email@gmail.com", "123")
// console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


function User (username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

User.prototype.encryptPassword = function () {
    return `${this.password}tea`
}
User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new user("tea", "tea@gmail.com", "123")
// console.log(chai);
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

