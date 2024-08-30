"use strict";
// use strict를 쓰면 선언 안하고 사용하면 무조건 오류를 내보낸다.
// 코드가 좀 명확해짐 (엄근진 모드)
// 하지만 이걸로도 해결이 안되는 경우가 종종 있음
// 설명해줬는데 못들음;

// aaa = 1;
// 원래는 안쓰면 var로 인식함
console.log("🚀 ~ aaa:", aaa);

var aaa = 1;
console.log("🚀 ~ aaa:", aaa);
// scope 종류 : global, function, block, moduel
// glovalThis.aaa 출력 하면 undefined
// 뭐 하튼 안 줘서 안된다고 함

// delete aaa;
// console.log("🚀 ~ aaa:", aaa)
// // 스티릭트 모드에선 aaa를 delete를 해도 지워지진 않는다.
// // 하지만 에러는 안남

// function f(a, a) {
//   console.log("outer f");
// }
// 스트릭트 모드에선 이 함수도 에러
// a,a 중복 사용 불가능
// a,ax 처럼 수정하면 됨

NaN = 1;
console.log("🚀 ~ NaN:", NaN);
// 이거 실행해도 NaN = NaN 나옴
// 옛날 방식이라 상수에도 할당이 어느 정도 됐다고 함
// 걍 되는데 안쓰는 기능

function f(a, a) {
  console.log("outer f", a);
}

{
  f(100);
  function f(a) {
    console.log("block f", a);
  }
}
// 임의의 블록
//  // function f(a) {
//  //   console.log("block f", a);
//  // }
// 스트릭트 모드에선 위 함수가 임의의 블록만큼만 호이스팅
// 모드가 아닐때는 블록을 뚫고 호이스팅
// * <참고 1>
f(200);

//스트릭트 모드가 아닐 때는 이 마지막 f(200);
//  // function f(a) {
//  //   console.log("block f", a);
//  // }
// 이 함수임
// 왜냐면 호이스팅이 일어나서 이전 함수가 덮어써짐

// 스트릭트 모드에선 f(200);이
// function f(a, a) {
//   console.log("outer f", a);
// }
// 이 함수임
// 왜냐면 호이스팅이 블록 스코프밖에 실행 안되니까 덮어써지지 않음

// var이랑 f는 전역 객체를 담고 있는 곳인 Global object에 보관
// 여기서 메모리 데이터 영역을 가르키고 있음

// <참고 1>
// 함수 안에서 const, var, function을 사용하면 함수 스코프
// 하지만 스트릭트 모드에선 function은 블럭 스코프에 갇힘
// 메모리 측면에서 이득이라고 함
// 예를 들어 if 문 안에 있는 함수는 실행될 확률이 50% 정도 된다.
// 그래서 모든 함수를 호이스팅 하기에는 메모리 측면에서 손해

// 코드가 길어질 땐 스트릭트 모드를 사용해야 함

// ESM은 라이브러리 설치할 때 import 사용
// 이 부분은 나중에 배울거임
