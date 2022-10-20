// closure example

// function calculate(x) {
//     function multiply(y) {
//         return x * y;
//     }
//     return multiply;
// }

// const multiply3 = calculate(3);
// const multiply4 = calculate(4);

// console.log(multiply3); // returns calculate function definition
// console.log(multiply3()); // NaN

// console.log(multiply3(6)); // 18
// console.log(multiply4(2)); // 8


// let a = 0;
// function sum() {
//     function increaseSum() {

//         // the value of a is increased by 1
//         return a = a + 1;
//     }
//     return increaseSum;
// }

// const x = sum();
// console.log(x()); // 1
// console.log(x()); // 2
// console.log(x()); // 3
// a = a + 1;
// console.log(a); // 4


//=>aceesing variable before declaration ??

// Memory Creation Phase =>||execution
// Code Execution        =>||context

//const and let donot use hoisting 

// let => temporal date zone
//const => const variable

// let num = 10

// function show() {
//     console.log(num);
// }

// show(); // lexical scope



// function reciver(fun) {
//     fun();
// }

// let num = 10

// function show() {
//     console.log(num);
// }
// reciver(show);

