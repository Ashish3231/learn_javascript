// ------------------------ Curring ---------------------------

/**
 * Currying is a functional programming technique in JavaScript where a function is transformed into a series of functions,
 * each taking a single argument. The curried function returns a new function that expects the next argument,
 * and so on, until all arguments have been supplied and the final result is returned.
 * This technique allows for partial application of functions and can lead to more modular and reusable code.
 */

// Non-curried function
function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3)); // Output: 6

// Curried version
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const curriedAdd = curryAdd(1)(2);
console.log(curriedAdd(3)); // Output: 6
