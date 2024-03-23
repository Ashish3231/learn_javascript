// ------------------------- Memoization --------------------------

/******
 * Memoization is a technique used in JavaScript and other programming languages to optimize expensive function calls by caching their results.
 * The idea is to store the return value of a function for a specific set of input arguments so that if the function is called again with the same arguments,
 * the cached result can be returned instead of re-computing it. This can significantly improve the performance of functions that are called frequently with the same inputs.
 */

function memoize(func) {
  const cache = new Map();

  return function (...args) {
    // Multiple args return in array
    let key = JSON.stringify(args);
    console.log('key: ', key);
    if (cache.has(key)) {
      console.log('Using cached result');
      return cache.get(key);
    } else {
      console.log('Computing and caching result');
      const result = func(...args);
      cache.set(key, result);
      return result;
    }
  };
}

// Example function to be memoized
function expensiveFunction(x, y) {
  // Simulating a time-consuming computation
  let result = 0;
  for (let i = 0; i < x; i++) {
    result += y;
  }
  return result;
}

// Create a memoized version of the expensive function
const memoizedExpensiveFunction = memoize(expensiveFunction);

// Call the memoized function
console.log(memoizedExpensiveFunction(5, 10)); // Computes and caches result
console.log(memoizedExpensiveFunction(5, 10)); // Uses cached result
console.log(memoizedExpensiveFunction(3, 7)); // Computes and caches result
console.log(memoizedExpensiveFunction(3, 7)); // Uses cached result
