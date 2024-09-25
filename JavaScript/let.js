
// declered let in same scope result error

let str = "message";
if (true) {
    let str = "message";
    console.log(str)
}
// let str = "message";


// Hosisting

let num;
console.log(num)
num = 89;
console.log(num);


// let is a blcoked scope

let str1 = "new message"
if (true) {
    let str1 = "old message"
    // block level scope
}
console.log(str1)


// 

let xc = "hey"
function foo() {
    console.log(xc); // con't use before init
    let xc = "hii";
    console.log(xc)
}
foo()
console.log(xc)










