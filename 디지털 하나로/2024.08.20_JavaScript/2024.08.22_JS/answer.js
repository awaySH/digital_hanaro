const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };

function ex1() {
  //   function f1(user) {
  //     console.log(user.id, user.name);
  //   }
  //   function f2({ id, name }) {
  //     console.log(id, name);
  //   }
  //   const f3 = ({ id, name }) => {
  //     console.log(id, name);
  //   };
}

function ex2() {
  //   //   const { passwd, ...userInfo} = user;
  //   // 이렇게 해도됨 얘도 백점
  //   //  delete user.passwd;
  //   // 이렇게하면 user가 오염됨
  //   const userInfo = { ...user };
  //   delete userInfo.passwd;
  //   //이렇게하면 백점짜리
  //   console.log(userInfo);
}

function ex3() {
  //   const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
  //   const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
  //   // cf. const id1 = arr[0][0].id;  // Bad
  //   console.log(id1, id2, id3);
  //   // 출력결과: 1 2 3
}

// const s = Symbol();
// const obj = { [s]: 123 };
// console.log(obj[s], Reflect.ownKeys(obj));
// const [kk] = Reflect.ownKeys(obj)
// console.log("🚀 ~ kk:", kk)
// symbol을 사용해서 키로 접근하는 방법
// 근데 몰라도 됨, 질문 때문에 한 거

function ex4() {
  //   function getValueExceptInitial(k) {
  //     const { [k]: val } = user;
  //    // 객체 안에 대괄호를 하면 k를 값으로 사용하겠다는 뜻
  //     const [, ...ret] = val;
  //     // const[,...ret] = typeof val === 'string' ? val : [,''];
  //     // val이 string일 때만 실행하겠다는 뜻
  //     // 왜냐면 id로 하면 id가 숫자라 오류가 생김
  //     return ret.join("");
  //   }
  //   console.log(getValueExceptInitial("name")); // 'ong'
  //   console.log(getValueExceptInitial("passwd")); // 'yz'
  //   console.log(getValueExceptInitial("addr")); // 'eoul'
  //   //   console.log(getValueExceptInitial("id")); // 'eoul'
}

function ex5() {
  user.f = function () {
    console.log("ffff", this.name);
  };

  console.log(user);

  user.f();

  const { f: xf } = user;
  // xf 새롭게 할당
  // xf 입장에서 f를 실행할 때 this를 인식 못함
  xf();
}

function getDiffMillis(dt1, dt2) {
  const d1 = new Date(dt1);
  const d2 = new Date(dt2);
  const { getTime: getTime1 } = d1;
  const { getTime: getTime2 } = d2;
  //bind 강제로 뭔 주소를 (놓침...)
}
getDiffMillis("2021-01-01", "2021-01-02");
