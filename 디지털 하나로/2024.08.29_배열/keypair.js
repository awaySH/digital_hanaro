const assert = require("assert");

const keyPair2 = (arr, n) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == n) return [i, j];
    }
  }
};

const keyPairN2 = (arr, n) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == n) return [i, j];
    }
  }
};

const keyPair = (arr, n) => {
  const cache = {};
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (val in cache) return [cache[val], i];
    cache[n - val] = i;
  }
};

keyPair([1, 3, 4, 5], 7); // [1, 2]
keyPair([1, 4, 45, 6, 10, 8], 16); // [3, 4]
keyPair([1, 2, 4, 3, 6], 10); // [2, 4]
keyPair([1, 2, 3, 4, 5, 7], 9); // [3, 4]  or [1, 5]
// cf. O(n^2) ⇒ ⇒ ⇒ O(N) || O(logN)
assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);
