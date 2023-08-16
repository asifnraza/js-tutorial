// foreach loop

const code = ["py", "js", "cpp", "java"]

code.forEach( function (item) {     
    // console.log(item);
})


code.forEach((val) => {
    // console.log(val);
})

// function printMe(items){
//     console.log(items);
// }

// code.forEach(printMe)


code.forEach( (item, index, arr)=>{
    // console.log(item, index, arr);
})

const myCode = [
    {
        langName: "Javascript",
        langFile: "js"
    },
    {
        langName: "Java",
        langFile: "java"
    },
    {
        langName: "Python",
        langFile: "py"
    },
]


myCode.forEach((ite)=>{
    console.log(ite.langName);
})