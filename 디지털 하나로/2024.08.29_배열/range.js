const assert = require("assert");

const range = (start, end, step = start > end ? -1 : 1) => {
  if (step == 0 || start == end) return [start];
  // 만약 step = 0 이거나 시작과 끝이 같으면 그냥 [start] return

  if ((start > end && step > 0) || (start < end && step < 0)) return [];
  // 비정상적인 입력 처리
  // 끝보다 시작이 더 큰데 step이 양수인 경우

  if (end === undefined) {
    if (start > 0) {
      end = start;
      start = 1;
    } else if (start < 0) {
      end = -1;
    } else {
      end = 0;
    }
  }
  // 끝 값이 정의가 안된 경우
  // 만약 range(5)라면 끝이 5, 시작이 1, step이 1인 경우를 의미
  // 만약 range(-5)라면 시작이 -5, 끝이 -1 -> [-5,-4,-3,-2,-1]을 의미
  // 만약 range(0)이라면 그냥 [0] 반환

  const results = [];
  for (let i = start; start > end ? i >= end : i <= end; i += step) {
    results.push(i);
  }
  // 결과 배열 만드는 과정
  // start > end 인 경우와 아닌 경우를 나눠서 조건 설정
  return results;
};

const rangeN2 = range(-4);
console.log("🚀 ~ rangeN2:", rangeN2);

assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 5, -1), []);

assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
assert.deepStrictEqual(range(-2), [-2, -1]);
assert.deepStrictEqual(
  range(50),
  Array.from({ length: 50 }, (_, i) => i + 1)
);
assert.deepStrictEqual(
  range(1, 150, 3),
  Array.from({ length: 50 }, (_, i) => i * 3 + 1)
);
