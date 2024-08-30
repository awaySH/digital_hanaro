"use strict";
var gg = 1;
let bb = 2;

function f1(x, y) {
  var gg = 11;
  let bb = 22;
  console.log("f1>", gg, bb, zz, f2, f2.length);
  f2("* first"); //
  {
    const xx = 99;
    f2("* nest-first");
    var zz = 88;
    //얘는 저 위로 호이스팅 일어남
    function f2(t) {
      console.log(t, "`nested`", xx, zz);
    }
    //얘는 함수 블록에 갇힘
  }
  function f2(t, u) {
    console.log(t, "`inner`", xx, zz);
  }
  function f2(t, u, v) {
    console.log(t, "`inner2`", xx, zz);
  }
  var zz = 800;
  // 최종적으로 가지고 있는 놈
  console.log("🚀  gg:", gg);
  f2("* second");
}

function f2(g) {
  console.log(g, "global f2>", gg, bb, xx, kk);
}
let xx = 9;
if (gg > 0) {
  var kk = 33;
  const yy = 9;
}
f1(1, 2);
console.log("kkkkk>>", kk);
f2("* third");

// 스트릭트 모드가 아니면 다르게 실행됨
// 이따 해보기
