// let val = 'test';
// let array = val.split('');
// console.log('array: ', array);

// let data = array.reduce((acc, cv) => {
//   acc[cv] = (acc[cv] || 0) + 1;
//   return acc;
// }, {});

// console.log('data: ', data);

// let i = 10;
// i = i++;
// console.log(i);
// i = ++i;
// console.log(i++);
// i = i++;
// console.log(i);

// console.log(x);

// var x = 10;

function findIndicesForSum(array, target) {
  const indices = new Map();

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const complement = target - current;

    if (indices.has(complement)) {
      console.log([indices.get(complement), i]);
      return [indices.get(complement), i];
    }

    indices.set(current, i);
  }

  return null; // No such indices found
}

const array = [1, 2, 3, 5];
const target = 5;
const result = findIndicesForSum(array, target);

if (result !== null) {
  console.log(`Indices: ${result[0]} and ${result[1]}`);
} else {
  console.log('No two indices found with sum equal to target.');
}
