const assert = require("assert");

const arr = [1, 2, 3, 4];

function pop(array, n = 1) {
  return array.splice(array.length - n, n);
}

// assert.deepStrictEqual(pop(arr), [4]);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝(꺼내 줘)!

// function unshift(array, ...args) {
//   return [...args, ...array];
// }
// assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
// assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);

// function shift(array, n = 1) {
//   return array.splice(n, Infinity);
// }
// assert.deepStrictEqual(shift(arr), [2, 3, 4]);
// assert.deepStrictEqual(shift(arr, 2), [3, 4]);
// assert.deepStrictEqual(arr, [1, 2, 3, 4]);
