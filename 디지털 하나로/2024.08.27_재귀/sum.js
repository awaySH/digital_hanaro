function memoized(fn) {
  const memoizedTable = {};
  return function B(k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

const neverOverFlowFactorial = memoized(function A(n) {
  if (n == 1) return 1;
  return n + neverOverFlowFactorial(n - 1);
});

function addto(n) {
  if (n == 1) return n;
  return n + addto(n - 1);
}

let sum = 0;
for (let i = 1; i <= 10000; i += 1) sum += i;
console.log("🚀  sum:", sum);
console.log(
  "🚀 ~ neverOverFlowFactorial ~ neverOverFlowFactorial:",
  neverOverFlowFactorial(10000)
);
console.log("🚀 ~ memoized ~ memoizedTable:", memoizedTable);
// console.log("🚀 ~ addto ~ addto:", addto(10000));
