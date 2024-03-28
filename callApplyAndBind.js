let name1 = {
  firstName: 'Ashish',
  lastName: 'singh',
  printFullName: function () {
    console.log(this.firstName + ' ' + this.lastName);
  },
};

name1.printFullName();

/****
 * Call Example
 *
 * 1. Executes the function immediately, with the specified this value and arguments.
 * 2. Useful when you know the number of arguments to pass to the function.
 */

let name2 = {
  firstName: 'Rajeev',
  lastName: 'Kundial',
};

function printName(city, state) {
  console.log(this.firstName + ' ' + this.lastName + ' ' + city + ' ' + state);
}

printName.call(name1, 'Noida', 'UP');
printName.call(name2, 'Delhi', 'Delhi');

/*****
 * Apply Example
 *
 * 1. Similar to call(), but accepts arguments as an array.
 * 2. Useful when the number of arguments is variable or unknown.
 * 3. The second argument (argsArray) is an array or array-like object containing the arguments to be passed to the function.
 */

let arr1 = ['Noida', 'UP', 'beginner', 'introvert'];
let arr2 = ['Delhi', 'intermidate', 'cool'];

printName.apply(name1, arr1);
printName.apply(name2, arr2);

/****
 * Bind Example
 *
 * 1. Unlike call() and apply(), bind() doesn't immediately execute the function. Instead, it returns a new function with
 *    the specified context and arguments bound to it.
 * 2.
 */

let bindFuntion = printName.bind(name1, 'Noida', 'UP');

bindFuntion();
