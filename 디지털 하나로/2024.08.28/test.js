globalThis.id = "Golobal_ID";
this.id = "Module_ID";

const obj = {
  id: 123,
  f: function () {
    console.log("obj > f =", this.id);
  },
  af: () => console.log("obj > af =", this.id),
  subObj: {
    id: 999,
    f: function () {
      console.log("obj > subObj > f =", this.id);
    },
    af: () => console.log("obj > subObj > af =", this.id),
  },
};

obj.f();
/// 123이 나옴
/// f는 일반 함수로 정의되어 있음
/// 따라서 일반 함수의 this는 객체인 obj를 가르키고 있어서
/// this.id는 객체의 id인 123이 나온다.
obj.af();
/// obj > af = Module_ID
/// 화살표 함수의 this는 객체를 가르키고 있지 않다.
/// this를 자신을 포함하는 스코프에서 가져오지, 함수 내부에서 새로운 this를 바인딩하지 않아.
/// af를 포함하는 스코프는 obj가 아니라 전역 모듈 스코프(여기서는 this.id = "Module_ID")야.
console.log("------------");
obj.subObj.f();
/// 일반함수 이므로 this는 그 함수를 감싸는 객체를 가르킴
/// 999 출력
obj.subObj.af();
/// 이것도 마찬가지로 화살표 함수이므로
/// 전역 id인 obj > subObj > af = Module_ID가 출력

for (var i = 0; i < 5; i += 1) {
  setTimeout(() => console.log(i), 100);
}
// 5가 다섯개 나옴
// i가 전역 변수처럼 작동
// setTimeout으로 인해 일정 시간뒤에 for문 작동
// 그래서 5 5 5 5 5가 나옴
for (let i = 0; i < 5; i += 1) {
  setTimeout(() => console.log(i), 100);
}
// 0 1 2 3 4가 나옴
// 블록 스코프가 새롭게 생성
// 그래서 실행될 때마다 변수가 새롭게 생성되서 0 1 2 3 4가 나옴
