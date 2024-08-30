const assert = require("assert");

const arr = [1, 2, 3, 4];

function push(n, ...arr) {
  n = n.concat(arr);
  return n;
}

function pop(n) {
  const ans = n[n.length - 1]; // 마지막 요소 저장
  n.length = n.length - 1; // 배열 길이를 줄여 마지막 요소 제거
  console.log("🚀 ~ pop ~ n:", n);
  return ans; // 마지막 요소 반환
}

function pop(n, cnt) {
  let ans = [];
  for (let i = 0; i < cnt; i++) {
    ans.splice(0, 0, n[n.length - 1]);
    n = n.splice(0, n.length - 1);
  }
  console.log("🚀 ~ pop ~ ans:", ans);
  return ans;
}

function unshift(arr, ...n) {
  arr.splice(0, 0, ...n);
  //   arr.flat(Infinity);
  console.log("🚀 ~ unshift ~ arr:", arr);
  return arr;
}

function shift(arr) {
  arr.splice(0, 1);
  console.log("🚀 ~ shift ~ arr:", arr);
  return arr;
}

function shift(arr, n) {
  for (let i = 0; i < n; i++) {
    arr.splice(0, 1);
  }
  console.log("🚀 ~ shift ~ arr:", arr);
  return arr;
}

// function unshift(arr, n) {
//   arr.splice(0, 0, n);
//   return arr;
// }

// try {
//   assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
//   console.log("✅ 테스트 통과: push 함수가 올바르게 동작했습니다.");
// } catch (error) {
//   console.error("❌ 테스트 실패:", error.message);
// }

// try {
//   assert.deepStrictEqual(pop(arr), 4);
//   console.log("✅ 테스트 통과: push 함수가 올바르게 동작했습니다.");
// } catch (error) {
//   console.error("❌ 테스트 실패:", error.message);
// }

// try {
//   assert.deepStrictEqual(pop(arr, 2), [3, 4]);
//   console.log("✅ 테스트 통과: push 함수가 올바르게 동작했습니다.");
// } catch (error) {
//   console.error("❌ 테스트 실패:", error.message);
// }

// try {
//   assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
//   console.log("✅ 테스트 통과: push 함수가 올바르게 동작했습니다.");
// } catch (error) {
//   console.error("❌ 테스트 실패:", error.message);
// }

// try {
//   assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
//   console.log("✅ 테스트 통과: push 함수가 올바르게 동작했습니다.");
// } catch (error) {
//   console.error("❌ 테스트 실패:", error.message);
// }

// try {
//   assert.deepStrictEqual(shift(arr), [2, 3, 4]);
//   console.log("✅ 테스트 통과: push 함수가 올바르게 동작했습니다.");
// } catch (error) {
//   console.error("❌ 테스트 실패:", error.message);
// }

// try {
//   assert.deepStrictEqual(shift(arr, 2), [3, 4]);
//   console.log("✅ 테스트 통과: push 함수가 올바르게 동작했습니다.");
// } catch (error) {
//   console.error("❌ 테스트 실패:", error.message);
// }

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝(꺼내 줘)!
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]);

assert.deepStrictEqual(arr, [1, 2, 3, 4]);
