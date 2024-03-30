/****
 * Promise APIs
 *
 * 1. Parallel apis call and get result
 * 2.
 */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('P1 failed');
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P2 success');
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P3 success');
  }, 3000);
});

/****
 * all
 *
 * 1. return array of promises of resolve value
 * 2. wait for all of them to resolve
 * 3. if any one them gives error ASAP it return error
 */
Promise.all([p1, p2, p3])
  .then((res) => {
    console.log('result of all: ', res);
  })
  .catch((err) => {
    console.log('error in all: ', err);
  });

/***
 * allSettled
 *
 * 1. it return the array of promises return in both case resolve and reject
 */

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log('result of allSettled: ', res);
  })
  .catch((err) => {
    console.log('error in allSettled: ', err);
  });

/*****
 * race
 *
 * 1. return the result of first settled promise
 * 2. if first settled promise gives error the it will return error
 */

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log('result of race: ', res);
  })
  .catch((err) => {
    console.log('error in race: ', err);
  });

/****
 * any
 *
 * 1. wait for first success
 * 2. if all promises are gives error then return AggregateError
 */

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log('result of any: ', res);
  })
  .catch((err) => {
    console.log('error in any: ', err);
  });
