function loopfibonacci(n) {
  const ans = [];
  for (i = 0; i <= n; i++) {
    if (i == 0 || i == 1) {
      ans[i] = i;
    } else {
      ans[i] = ans[i - 1] + ans[i - 2];
    }
  }
  return ans[n];
}

function recursiveFibonacci(n) {
  if (n == 0 || n == 1) {
    return n;
  } else {
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
  }
}

function memoized(fn) {
  const memoizedTable = {};
  return function B(k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

const memoizedFibonacci = memoized((n) => {
  if (n == 0 || n == 1) {
    return n;
  } else {
    return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
  }
});

console.log("🚀 ~ loopfibonacci:", loopfibonacci(15));
console.log(
  "🚀 ~ recursiveFibonacci ~ recursiveFibonacci:",
  recursiveFibonacci(15)
);
console.log(
  "🚀 ~ memoizedFibonacci ~ memoizedFibonacci:",
  memoizedFibonacci(15)
);
