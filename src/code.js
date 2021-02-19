// function outerFunction(outerVariable) {
//   return function innerFunction(innerVariable) {
//     console.log('Outer Variable: ' + outerVariable)
//     console.log('Inner Variable: ' + innerVariable)
//   }
// }
//
// const newFunction = outerFunction('outside')
//
// newFunction('inside')
//
//

//so the inner function has access to the outer function's variable, outerVariable, which is set to 'outside'


//
// let addTo = function(passed) {
//   let inner = 2
//   return passed + inner;
// }
//
// //returns passed(3) added to inner(2)
//
// console.log(addTo(3)); // => 5
//
//
// //in javascript, you don't need to pass in the passed variable. like so:
//
// let argument = 3;
//
// let add = function() {
//   let inner = 2;
//   return argument + inner
//   //JS has to look outside the function to see what argument is
// }
//
// argument = 4; //most recent version of variable will be used
//
// console.log(add())
// //Variables outside the function are available inside the function due to lexical scoping.

// var addTo = function(passed) {
//
//   var add = function(inner) {
//     return passed + inner
//   }
//
//   return add;
// }
//
// var addThree = new addTo(3);
// console.log(addThree) //this logs a function! once you pass it an argument, it will execute:
// console.log(addThree(1));

//Recursive Functions
//1. a recursive function calls itself.
//2. A recursive function has 2 main parts (1, a terminating condition, and 2, the recursive case (portion of the function that calls itself))

//Factorial problem


let factorial = function fac(num) {
  if (num === 1) {
    return 1;
  }
  return num * fac(num - 1);
}

let final = factorial(5);
console.log(final)
