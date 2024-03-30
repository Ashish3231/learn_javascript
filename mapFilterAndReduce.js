/****
 * In JavaScript, map, filter, and reduce are higher-order functions that are commonly used for processing arrays.
 */

const users = [
  { firstName: 'Rajeev', lastName: 'Kundiyal', age: '25' },
  { firstName: 'Raja', lastName: 'Agarwal', age: '23' },
  { firstName: 'Puspender', lastName: 'Kumar', age: '22' },
  { firstName: 'Ashish', lastName: 'Singh', age: '22' },
];

/****
 * Map Example
 *
 * 1. Map: The map() method creates a new array by calling a provided function on every element in the calling array.
 */

const userMap = users.map((user) => user.firstName + ' ' + user.lastName);

console.log('userMap: ', userMap);

/*******
 * Filter Example
 *
 * 1. Filter: The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 */

const resultFilter = users.filter((user) => user.age > 22);

console.log('resultFilter: ', resultFilter);

const combineResultFilterAndMap = users
  .filter((user) => user.age > 22)
  .map((user) => user.firstName);

console.log('combineResultFilterAndMap: ', combineResultFilterAndMap);

/**
 *
 * Reduce Example
 *
 * 1. Reduce: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a
 *  single output value.
 */

//find which age id repeate
//output {25: 2, 23: 1, 25: 1}

const resultReduce = users.reduce((acc, currentValue) => {
  // if (acc[currentValue.age]) {
  //   acc[currentValue.age] = ++acc[currentValue.age];
  // } else {
  //   acc[currentValue.age] = 1;
  // }
  acc[currentValue.age]
    ? (acc[currentValue.age] = ++acc[currentValue.age])
    : (acc[currentValue.age] = 1);
  return acc;
}, {});

console.log('resultReduce: ', resultReduce);

const resultReduce1 = users.reduce((acc, currentVal) => {
  if (currentVal.age > 22) {
    acc.push(currentVal.firstName);
  }
  return acc;
}, []);

console.log('resultReduce1: ', resultReduce1);
