// const code = ["py", "js", "cpp"]

// const values = code.forEach((item) => {
// // console.log(item);
// return item
// })

// console.log(values);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const mynum = num.filter((numm) => {
//  return   numm > 5
// })

const newnum = []

num.forEach((num) => {
    if (num > 5) {
        newnum.push(num)
    }
})

// console.log(newnum);


const books = [
    {
        title: "Book One", genre: "Fiction", publish: 1999, edition: 2011
    },
    {
        title: "Book two", genre: "History", publish: 1978, edition: 2001
    },
    {
        title: "Book three", genre: "Science", publish: 2003, edition: 2020
    },
    {
        title: "Book Four", genre: "History", publish: 2001, edition: 2019
    },
    {
        title: "Book Five", genre: "Scrence", publish: 1991, edition: 2011
    },
]


// const userBooks = books.filter((bk) => bk.genre == "History")
const userBooks = books.filter((bk) => { 
    return bk.publish >= 2000 && bk.genre == "History"

})

console.log(userBooks);