const promiseOne = new Promise(function (res, rej) {        
    // Do async task
    // DB calls, network, cryptography

    setTimeout(function () {
        console.log("Async task is complete");
        res()
    }, 3000)
})

promiseOne.then(function() {
    console.log("promise consumed");
})

new Promise(function (res, rej) {
    setTimeout(() => {
        console.log('Async task 2 complete');
        res()
    }, 2000);
}).then(function () {
    console.log('async task 2 consumed');
})


const promiseThree = new Promise(function (res, rej) {
    setTimeout(() => {
        res({username: "Chai", email: "test@email.com"})
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (res, rej) {
    setTimeout(function () {
        let error = false //true
        if (!error) {
            res({username: "Asif", password: "123"})
        } else {
            rej('ERROR: something went wrong')
        }
    }, 2000)
})

promiseFour
.then(function (user) {
    console.log(user);
    return user.username
})
.then(function (username) {
    console.log(username);
})
.catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log('The promise is either rsolved or rejected');
})


const promiseFive = new Promise((res, rej) => {
    setTimeout(function () {
        let error =  true //false
        if (!error) {
            res({username: "js", password: "123"})
        } else {
            rej('ERROR: js something went wrong')
        }
    }, 2000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }


// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data) => console.log(data))
.catch((error) => console.log(error))


