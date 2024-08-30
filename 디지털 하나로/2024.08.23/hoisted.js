"use strict";
var gg = 1;
let bb = 2; // let은 호이스팅되지만 TDZ로 인해 선언 전에는 접근 불가

function f1(x, y) {
  var gg; // 호이스팅된 var 변수
  var zz; // 호이스팅된 var 변수
  function f2(t, u, v) {
    console.log(t, "`inner2`", xx, zz);
  } // 마지막으로 정의된 f2 함수로 덮어씌워짐
  let bb; // let 변수는 호이스팅되지만 TDZ로 인해 선언 전에는 접근 불가

  gg = 11;
  bb = 22;
  console.log("f1>", gg, bb, zz, f2, f2.length);
  // zz는 undefined, f2는 마지막으로 선언된 함수 f2(t, u, v)

  f2("* first"); // f2는 세 번째로 정의된 f2(t, u, v)를 호출함

  {
    const xx = 99; // const는 블록 범위에서만 유효
    f2("* nest-first"); // f2는 이미 세 번째로 정의된 함수로 호출됨
    zz = 88; // var로 선언된 zz가 호이스팅되어 사용됨
    // 호이스팅된 첫 번째 f2 선언이 두 번째 선언에 의해 덮어씌워짐
    function f2(t) {
      console.log(t, "`nested`", xx, zz);
    }
  }
  zz = 800; // zz는 최종적으로 800이 할당됨
  console.log("🚀  gg:", gg);
  f2("* second"); // 두 번째로 정의된 f2가 호출됨 (f2(t, u, v))
}

function f2(g) {
  console.log(g, "global f2>", gg, bb, xx, kk);
}

let xx = 9; // let은 호이스팅되지만 선언 전에는 접근 불가
if (gg > 0) {
  var kk = 33; // var는 호이스팅되어 함수 바깥에서도 접근 가능
  const yy = 9; // const는 블록 범위에서만 유효
}

f1(1, 2); // f1 함수 호출
console.log("kkkkk>>", kk); // 33 출력
f2("* third"); // 글로벌 f2 호출
