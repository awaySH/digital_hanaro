const assert = require("assert");

// const deleteArray = (arr, start, end = Infinity) =>
//   arr.filter((a, i) => i < start || i >= end); // filter로 하나하나 검사, 조건에 맞는 요소들만 남겨둔다 -> 삭제 구현

const deleteArray = (arr, start, end = Infinity) => {
  if (typeof start === "number") {
    return arr.filter((a, i) => i < start || i >= end);
  } // type이 number일 때는 아까 구현한 것처럼 구현
  return arr.filter((a) => a[start] !== end);
};

const arr = [1, 2, 3, 4];
assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
const users = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "id", 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "name", "Lee"), [Hong, Kim]);
