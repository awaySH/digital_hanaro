const assert = require("assert");

const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park];

const reduce = (arr, fn, initValue) => {
  if (!arr || !Array.isArray(arr)) return []; // array 체크
  let i = 0;
  let acc = initValue;
  if (!initValue) {
    acc = arr[0];
    i = 1;
  }
  for (; i < arr.length; i += 1) {
    acc = fn(acc, arr[i]);
  }
  return acc;
};

reduce([1, 2, 3], (a, b) => a + b, 0); // 6이면 통과!
// cf. [1,2,3].reduce((a,b) => a + b, 0);       // 6
reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15면 통과!
reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
reduce([2, 2, 2], (a, b) => a * b); // 8이면 통과!
reduce([3, 3, 3], (a, b) => a * b, 0); // 0이면 통과!
reduce(users, (acc, user) => acc + user.name); // [object Object]LeePark

const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur, 0),
  a10.reduce((acc, cur) => acc + cur, 0)
);

assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  users.reduce((acc, user) => acc + user.name)
);

const square = (a) => a ** 2;
const sqrt = (a) => Math.sqrt(a);
const cube = (a) => a ** 3;

const arr = [1, 2, 3, 4, 5];
const r5 = arr
  .map((a) => a ** 2)
  .map((a) => Math.sqrt(a))
  .map((a) => a ** 3);
console.log("🚀 ~ r5:", r5);

const baseJobs = [square, sqrt, cube];
const r6 = arr.map((a) => baseJobs.reduce((acc, job) => job(acc), a));
console.log("🚀 ~ r6:", r6);

const aJobs = [square, sqrt, cube];
const bJobs = [cube, square];

// const robot = (arr, jobs) => {
//   return arr.map((a) => jobs.reduce((acc, job) => job(acc), a));
// };

const robot = (arr, jobs) => {
  return arr.map((a) => jobs.reduce((acc, job) => job(acc), a));
};
console.log("🚀 ~ robot(arr, aJobs):", robot(arr, aJobs));
console.log("🚀 ~ bJobs:", robot(arr, bJobs));
assert.deepStrictEqual(robot(arr, aJobs), [1, 8, 27, 64, 125]);
assert.deepStrictEqual(robot(arr, bJobs), [1, 64, 729, 4096, 15625]);
