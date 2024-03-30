// 'use strict';

x = 10; //in strict mode we can not use undeclared variable
console.log(x);

function y(sameArgs, sameArgs) {
  // in strict mode we can not pass the same arguents in function
  console.log('hi i am y');
}
delete y; //in strict mode we can not y . y can be function or variable
y();
