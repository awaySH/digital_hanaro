// let count = 0;
// let arr = [];

// function makeArray(a) {
//   count = count + 1;
//   if (count <= a) {
//     arr.push(count);
//     makeArray(a);
//   } else {
//     return console.log(arr);
//   }
// }

// makeArray(12);

// let arr = [];

// function makeReverseArray(a) {
//   arr.push(a);
//   if (a != 1) {
//     makeReverseArray(a - 1);
//   } else {
//     return console.log(arr);
//   }
// }

// makeReverseArray(5);

function makeArray(a) {
  if (a === 1) return [1];
  const result = [...makeArray(a - 1), a];

  // 결과를 최종적으로 출력
  if (a === arguments.callee.caller.arguments[0]) {
    console.log(result);
  }

  return result;
}

function makeArrayTCO(n, acc = []) {
  if (n === 0) return acc;
  return makeArrayTCO(n - 1, [...acc, n]); // 재귀 호출이 마지막 작업
}

// function makeReverseArray(b) {
//   if (b === 1) return [1];
//   return console.log([b, ...makeReverseArray(b - 1)]);
// }

console.log(makeArrayTCO(10));
// makeReverseArray(5);
