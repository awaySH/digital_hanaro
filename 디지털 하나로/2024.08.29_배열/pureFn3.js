const assert = require("assert");
// function push(array, …args) {}
const arr = [1, 2, 3, 4];

const push = (arr, ...args) => [...arr, ...args];
const pop1 = (arr, cnt = -1) =>
  cnt === -1 ? arr.slice(cnt)[0] : arr.slice(cnt); // 한 개만 뺄 땐, 원소 형태로 return
const pop = (arr, idx = -1) => {
  const result = arr.slice(idx);
  if (result.length === 1) return result[0];
  return result;
}; // 조건문을 써서 결과의 길이가 1개면 원소만 리턴
const unshift = (arr, ...args) => [...args, ...arr]; // push를 반대로 하면 된다.
const shift = (arr, idx = 1) => arr.slice(idx);

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝(꺼내 줘)!
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

console.log("-----------------------------------------------");
