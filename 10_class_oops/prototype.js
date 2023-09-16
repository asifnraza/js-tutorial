// let myName = "Asif     "

// console.log(myName.length);

// need to understand trueLength function


let myHeros = ['thor', 'spider']

let heroPower = {
    thor: "hammer",
    spiderman: 'sling',

    getSpiderPower : function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.asif = function () {
    console.log(`asif is present in all objects`);
}

Array.prototype.myasif = function () {
    console.log('hello asif');
}

heroPower.asif()
myHeros.asif()
myHeros.myasif()


// Inheritance

const user = {
    name: 'chai',
    email: 'chai@gg.com'
}

const teacher = {
    makeVideos: true
}

const teachingSupport = {
    isAvailable: false
}

const taSupport = {
    makeAssignment: "JS",
    fullTime: true,
    __Proto__: teachingSupport
}

teacher.__Proto__ = user

// mordern syntax

Object.setPrototypeOf(teachingSupport, teacher)


let anotherusername = 'chai         '

String.prototype.tureLength = function () {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is - ${this.trim().length}`);
}

anotherusername.tureLength()
"asif".tureLength()