
// const is block level scope like let

// const num; // give error

const n = "xyz";
console.log(n)

// like let 

const str01 = "hii"
if (true) {
    const str01 = "hello"
    console.log(str01);
}
console.log(str01)


// 

const v01 = "io";
function myFun() {
    //console.log(v01) // error - can't use befire init
    const v01 = "gh";
    console.log(v01)
}
myFun()
console.log(v01)

//

const myname = "akash"
myname = "yadav" // Type error 





