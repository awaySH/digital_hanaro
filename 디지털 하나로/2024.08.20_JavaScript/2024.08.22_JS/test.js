// const obj = { i: 1, j: 2, l: 3, m: 4, n: 5 };
// let { j, i, k = i * j * n } = obj;
// console.log("🚀 ~ k:", k);
// console.log("🚀 ~ i:", i);
// console.log("🚀 ~ j:", j);

// const hong = { id: 1, name: "Hong" };
// const lee = { id: 2, name: "Lee" };

// function f1(user) {
//   console.log(user.id);
//   console.log(user.name);
// }

// const f3 = console.log(hong.id, hong.name);

// // const f3 = c;

// f3;

// const user = { id: 1, name: "Hong", addr: { city: "Seoul" } };
// // function fn(arg1, { id, name }, arg2) {
// //   console.log(arg1, id, name, arg2);
// // }
// // fn(10, user, 20);

// let un;
// const a = un?.[0];
// user = { id: 1, name: "P", age: 33 };
// const [k, v] = Object.entries(user);

function f1(user) {
  console.log(user.id, user.name);
}

function f2({ id, name }) {
  console.log(id, name);
}
const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };

f2(hong);
