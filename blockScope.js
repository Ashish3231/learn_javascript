// ------------------- block scope ----------------

/**
 * Variables declared using let and const also have block scope.
 * This means they are accessible only within the block (curly braces) in which they are defined.
 * var can accessible outside the block.
 * let and const not accessible outside the block
 */
if (true) {
  let blockVariable = 50;
  // console.log(blockVariable);
}
// This will throw a ReferenceError because blockVariable is not accessible outside its block.
//console.log(blockVariable);
