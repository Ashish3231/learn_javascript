/***
 *  where multiple function calls are chained together, with each function call operating on the result of the previous one.
 *  This allows for concise and expressive code by eliminating the need for intermediate variables.
 */

// Define an object with chainable methods
const calculator = {
  value: 0,
  add(x) {
    this.value += x;
    return this; // Return the object itself for chaining
  },
  subtract(x) {
    this.value -= x;
    return this; // Return the object itself for chaining
  },
  multiply(x) {
    this.value *= x;
    return this; // Return the object itself for chaining
  },
  divide(x) {
    if (x !== 0) {
      this.value /= x;
    } else {
      console.log("Error: Division by zero.");
    }
    return this; // Return the object itself for chaining
  },
  getValue() {
    return this.value;
  },
};

// Chain multiple method calls
const result = calculator.add(5).multiply(2).subtract(3).divide(4).getValue();
console.log(result); // Output: 2.5
