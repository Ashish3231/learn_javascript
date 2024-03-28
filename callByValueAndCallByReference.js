// ---------------------------call by value ---------------------------------------

/**
 * When a primitive data type (like numbers, strings, booleans, null, and undefined)
 * is passed as an argument to a function or assigned to another variable, a copy of the actual value is made.
 * Any changes made to the copy do not affect the original value.
 */

let num = 42;

function modifyNumber(number) {
  number = 100;
}

modifyNumber(num);
console.log(num); // Output: 42

// ----------------------------------- call by reference ------------------------------------

/**
 * When objects (including arrays and functions) are passed to a function
 * the value passed is actually a reference to the memory location where the object is stored.
 * As a result, changes made to the object inside the function will affect the original object.
 */

let arr = [1, 2, 3];

function modifyArray(array) {
  array.push(4);
}

modifyArray(arr);
console.log(arr); // Output: [1, 2, 3, 4]

let obj1 = { value: 10 };
let obj2 = obj1;

function modifyObject(obj) {
  obj.value = 20;
  obj = { value: 30 };
}

modifyObject(obj2);
console.log(obj1.value); // Output: 20
