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



let addTo = function(passed) {
  let inner = 2
  return passed + inner;
}

//returns passed(3) added to inner(2)

console.log(addTo(3)); // => 5


//in javascript, you don't need to pass in the passed variable. like so:

let argument = 3;

let add = function() {
  let inner = 2;
  return argument + inner
  //JS has to look outside the function to see what argument is
}

argument = 4; //most recent version of variable will be used

console.log(add())
//Variables outside the function are available inside the function due to lexical scoping.
