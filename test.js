async function funTpo() {
  console.log('1');

  async function func() {
    console.log('2');
  }
  await func();

  console.log('3');
}

funTpo();
