let x = 'global';

function outer() {
  let x = 'outer';

  function inner() {
    console.log(x); // Accessing x from the inner scope
  }

  inner();
}

outer(); // Output: outer
