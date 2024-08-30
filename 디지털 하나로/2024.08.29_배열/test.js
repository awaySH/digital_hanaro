const hong = { id: 1, name: "hong" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "lee" };
const park = { id: 4, name: "park" };

const users = [hong, kim, lee, park];
const idxKim = users.indexOf(kim);
console.log("🚀 ~ idxKim:", idxKim);
// kim을 찾는 방법
const idxIdx2 = users.findIndex((a) => a.id == 3);
console.log("🚀 ~ idxIdx2:", idxIdx2);
// id가 2인 친구를 찾는 방법
const idxIdx1 = users.findLastIndex((a) => a.id == 1);
console.log("🚀 ~ idxIdx1:", idxIdx1);
// 가장 먼저 들어간 친구를 찾는 방법
const findId = (id) => (a) => a.id == id;
const idxFind = users.findLastIndex(findId(1));
console.log("🚀 ~ idxFind:", idxFind);
// 임의의 id를 내가 찾아주는 함수

console.log("----------------------------------");

const names = users.map((a) => a.name);
console.log("🚀 ~ names:", names);

console.log("----------------------------------");

const arr = [1, 2, 3, 4, 5];

// const isPrime = (n) => {};

// const hasPrime = (arr) => {
//   return arr.some((a) => {
//     if (a === 1) return false;
//     for (let i = 2; i < a; i++) {
//       if (a % i === 0) return false;
//     }
//     return true;
//   });
// };

// const primeNumbers = (arr) => {
//   let ans = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     let flag = true;
//     if (arr[i] < 2) {
//       flag = false;
//     } else {
//       for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
//         // 제곱근까지만 검사
//         if (arr[i] % j === 0) {
//           flag = false;
//           break;
//         }
//       }
//     }
//     if (flag) {
//       ans.push(arr[i]);
//     }
//   }
//   return ans; // 결과 반환
// };

// console.log(hasPrime(arr));
// console.log(primeNumbers(arr));

//1) 소수를 가지고 있는지

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    return n === 1 || n % i === 0 ? false : true;
  }
};

const isPrime2 = (n) => {
  if (n < 2) return false;
  return Array.from({ length: n - 2 }, (_, i) => i + 2).every(
    (i) => n % i !== 0
  );
};

const hasPrime = (arr) => arr.some((a) => isPrime2(a));
console.log("hasPrime", hasPrime(arr));
// assert.strictEqual(hasPrime([1, 2, 3]), true);

//2) 소수를 가지고 있다면, 추출

const primeArr = [];
const primeNumbers = (arr) =>
  arr.forEach((a) => {
    if (isPrime(a)) {
      primeArr.push(a);
    }
  });

primeNumbers(arr);
console.log("primeArr", primeArr);
