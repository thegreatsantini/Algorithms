/*
A closure is one way of supporting first-class functions; it is an expression that can reference variables within its scope (when it was first declared), be assigned to a variable, be passed as an argument to a function, or be returned as a function result.

Or, a closure is a stack frame which is allocated when a function starts its execution, and not freed after the function returns (as if a 'stack frame' were allocated on the heap rather than the stack!)
*/

// console.log('i:', i);
// console.log('x:', x);
console.log('ourFunc():', ourFunc());
console.log('variableFunc:', variableFunc());

function ourFunc() {
    for (var i = 0; i < 5; i++) {
        var x = 0;
        console.log(i)
        // setTimeout(function() {console.log(i)})
    }
}

var variableFunc = function ourFunc() {
    for (var i = 0; i < 5; i++) {
        var x = 0;
        console.log(i)
        // setTimeout(function() {console.log(i)})
    }
}

///////////////////////////////////////

// function sayHello2(name) {
//     var text = 'Hello ' + name; // Local variable
//     var say = () => { // anonomouse func
//         return text;
//     }
//     return say;
// }
// var say2 = sayHello2('Bob');
// // console.log(say2()); // logs "Hello Bob"

// ////////////////////////////////////////////

// function say667() {
//     // Local variable that ends up within closure
//     var num = 42;
//     var say = function () {
//         console.log(num);
//     }
//     num++;
//     return say;
// }
// var sayNumber = say667();
// sayNumber(); // logs 43