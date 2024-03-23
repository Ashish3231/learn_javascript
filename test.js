function outer(s) {
  let a = 7;
  function inner() {
    function innerInner() {
      console.log(a, s);
    }
    return innerInner();
  }
  return inner();
}

outer('Ashish');
