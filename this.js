'use strict';

/****
 * this is global space
 *
 * 1. this global object may be window or global depends on where  js code is runnning in browser window or  in nodejs we say
 * that global
 *
 */

console.log(this);

/****
 * working of this inside a function
 *
 * 1. this non strict mode this - (this substitution)
 *  if the value of this keyword is null or undefined then it will repplace with the globall keyword. only in non strict mode
 * 2. this kewords depends how function is called
 */

function x() {
  // value depends on strict and non-strict mode
  console.log(this);
}
x(); // Call the function directly

// If you want to call the function using the global object
global.x = x;
global.x(); // Call the function using the global object

/************
 * this inside a object method
 */

console.log(
  '=============================================================================',
);
const obj1 = {
  firstName: 'Rajeev',
  printName: function () {
    console.log(this.firstName);
  },
};

obj1.printName();

const obj2 = {
  firstName: 'Ashish',
};

// call apply and bind (sharing methods)
// by using call we can override the this keyword with object

obj1.printName.call(obj2);

/***********
 * this inside the arrow function
 *
 */

console.log('===========================================================');
const obj = {
  a: 10,
  x: () => {
    console.log(this);
  },
};

obj.x();

const newObj = {
  a: 10,
  x: function () {
    // enclosing lexical context
    // arrow functions don't provide their own this binding (it retains the this value of the enclosing lexical context).
    // in arrow function this refer to outside ite lexical scope context
    const y = () => {
      console.log(this);
    };
    y();
  },
};

newObj.x();

/***
 * inside DOM element this refer to Htlm tag
 */
