// ex1) 배열의 각 원소를 String으로 변환하시오.
const assert = require("assert");
const arr = [1, 2, 3, true];
const ret1 = arr.map(String);
assert.deepStrictEqual(ret1, ["1", "2", "3", "true"]);

// ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오.

// const classNames = (...args) =>
//   args.reduce((acc, a) => `${acc}${acc ? " " : ""}${a ? a : ""}`, "");
// 지저분함, 근데 난 오류남

const classNames = (...args) => args.filter((a) => !!a).join(" ");
// !!a : a가 빈 문자열인지 판별

const ret2 = classNames("", "a b c", "d", "", "e"); // cf. clsx
assert.strictEqual(ret2, "a b c d e");
// 주의: ' a b c d  e'면 안됨!!
