/****
 * This means that you can use variables and functions before they are declared in your code.
 *
 */

console.log(x); // undefined
var x = 5;
console.log(x); // 5

/***********
 * This is because during the compilation phase,
 *  the variable declaration var x is moved to the top of its containing scope, effectively making it equivalent to:
 */

var x;
console.log(x); // undefined
x = 5;
console.log(x); // 5

//var x; is hoisted, but x = 5; remains in its original position.

/******
 * Example 2
 *
 *  the foo() function is called before its declaration,
 * but it still works because the function declaration is hoisted to the top of its containing scope.
 *
 */

foo(); // "Hello, I'm a function declaration!"

function foo() {
  console.log("Hello, I'm a function declaration!");
}
