class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is - ${this.username}`);
    }
    static createId(){
        return '123'
    }
}

const asif = new User("asif")
console.log(asif.createId());

class Teacher extends User{
    constructor(username, email)
    {
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher('iphone', 'email')

console.log(iPhone.logMe())