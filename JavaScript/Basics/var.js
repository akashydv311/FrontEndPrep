
// var

// if var variable is in the function then it becomes the block level
var x = 10;

function my_fun() {
    var x = 20;
    console.log(x)
}

console.log(x)
my_fun();
console.log(x);


// if var is declared again then it's ignored
var num = "hii";

var num = "hello";

console.log(num)


// var is the - function scope varibale

function sayHi() {
    var message = "Hello EveryOne!";

}
// console.log(message)


// if varibake has no vale it's becomes undefined

console.log(str)
if (str === 'infosys') {
    var str = "infosys";
    console.log(str);
}
console.log(str)

// var is a function level scope

var str1 = "new message"
if (true) {
    var str1 = "old message"
}
console.log(str1)


//

var bn = "ji"
function foo() {
    console.log(bn) // give undefined
    var bn = "hello";
    console.log(bn)
}
foo()
console.log(bn)






