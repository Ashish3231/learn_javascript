function outer() {
  let outerVar = "I am from outer";

  function inner(msg) {
    console.log(outerVar + " " + msg); // The inner function references outerVar
  }

  return inner; // Return the inner function
}

let closureFunction = outer(); // outer() is executed, and inner function is returned
closureFunction("hello"); // Even when executed here, inner still has access to outerVar

//------------------------------------------------------------------------------------

function outest(OutestString) {
  const outestVar = 1;
  return function outer(outerString) {
    const outerVar = 7;
    return function inner(innerString) {
      console.log(OutestString, outerString, innerString, outestVar, outerVar);
    };
  };
}

const y = outest("hello ");
const z = y("my ");
// const z = outest('hello ')('my ')('friends ')
// 1000 line of code

z("friends ");

//------------------------------------------ clouser setTimeout example
function closr() {
  for (var index = 1; index <= 5; index++) {
    function counter(num) {
      setTimeout(() => {
        console.log(num); // num has reference each time
      }, index * 1000);
    }
    counter(index);
  }
}

closr();

//------------------------------------------ clouser encapsulation

function encapsulateCounter() {
  var count = 0;
  return function counter() {
    count++;
    console.log(count);
  };
}

var a = encapsulateCounter();
a();
a();
a();
a();

//---------------------------------------------------------
function outer() {
  let x = 10;
  function inner() {
    let y = 5;
    console.log(x + y);
    x = 20;
  }
  return inner;
}
var innerFunc = outer();
innerFunc();
innerFunc();
