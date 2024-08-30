const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);

function once(f) {
  let flag = true;
  return function (...args) {
    if (flag) {
      flag = false;
      return f(...args);
    } else {
      return undefined;
    }
  };
}

console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined
