class User {
    constructor(email, pass){
        this.email = email
        this.pass = pass

    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get pass(){
        return `${this._pass.toUpperCase()}asif`
    }

    set pass(value){
        this._pass = value
    }
}

const asif = new User("a@a.ai", "abc")
console.log(asif.pass);
console.log(asif.email);