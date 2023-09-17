const User = {
    _email: 'a@aa.com',
    _pass: 'xyz',


    get email(){
        return this._email.toUpperCase()
    },

    set emai(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
console.log(tea._pass);