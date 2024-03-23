/**********
 * Shallow Copy:
 *
 * A shallow copy of an object creates a new object that is a direct copy of the original object, but it only copies the top-level properties of the object.
 * If the original object contains nested objects or arrays, the shallow copy will still reference the same nested objects or arrays. In other words, it does not clone the nested objects or arrays; it merely copies references to them.
 * Shallow copies are quicker to create and consume less memory because they do not duplicate the entire structure of the original object.
 * Changes made to nested objects or arrays within the shallow copy will affect the original object, and vice versa, because they share references to the same nested structures.
 *
 * Note: Editing inner objects and arrays will affect both the clone and the original.
 */

const originalObject = {
  key1: 'value1',
  key2: 'value2',
  inner: {
    innerKey1: 'innerValue1',
    innerArray: [1, 2, 4, 65],
  },
};

// two ways of shallow copy in js
// const clonedObject = { ...originalObject }
// const clonedObject = Object.assign({}, originalObject);
const clonedObject = { ...originalObject };

clonedObject.newKey = 'newvalue';
clonedObject.key1 = 'edit';
clonedObject.inner.innerArray = ['edit'];
console.log('clone value: ', clonedObject);

console.log('originalObject: ', originalObject);

//========================================================================================================================================================================================
/**********
 * Deep Copy:
 *
 * A deep copy of an object creates a new object where all properties, including nested objects and arrays, are recursively duplicated. This results in a completely independent copy of the original object, with no shared references to any nested structures.
 * Deep copies are useful when you want to make sure that changes to the copied object do not affect the original object and vice versa. It provides a clean separation between the two objects.
 * Creating a deep copy can be more time-consuming and memory-intensive, especially for complex objects with deep nesting.
 *
 * Note: This is a deep copy, independent of both the clone and original.
 */

const originalObject1 = {
  key1: 'value1',
  key2: 'value2',
  inner: {
    innerKey1: 'innerValue1',
    innerArray: [1, 2, 4, 65],
  },
};

// two ways of deep copy in js
// 1=> JSON.parse(JSON.stringify(originalObject));
// 2=> const _ = require('lodash'); // Import lodash
//     const clonedObject = _.cloneDeep(originalObject);

const clonedObjectDeep = JSON.parse(JSON.stringify(originalObject1));

clonedObjectDeep.newKey = 'newvalue';
clonedObjectDeep.key1 = 'edit';
clonedObjectDeep.inner.innerArray = ['edit'];
console.log('deep clone value: ', clonedObjectDeep);

console.log('originalObject1: ', originalObject1);
