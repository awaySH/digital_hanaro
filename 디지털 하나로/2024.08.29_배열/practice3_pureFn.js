const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park]; // 오염되면 안됨!!

users.addUser = function (newer) {
  return [...this, newer];
}; // 화살표 함수로 구현 가능

users.removeUser = function (toRemoveUser) {
  return this.filter((user) => user.id !== toRemoveUser.id);
}; // id가 다른 친구들만 남김 -> id가 같은 사람은 지워짐

users.changeUser = function (fromUser, toUser) {
  return users.map((user) => (user.id === fromUser ? toUser : user));
};

// ["addUser", "removeUser", "changeUser"].forEach((fn) =>
//   Object.defineProperties(users, fn, {
//     enumerable: false,
//   })
// );

["addUser", "removeUser", "changeUser"].forEach((fn) => {
  Object.defineProperty(users, fn, {
    enumerable: false,
  });
}); // 배열의 속성을 드러나지 않도록 해주는 코드

users.addUser(hong); // [kim, lee, park, hong]
users.removeUser(lee); // [kim, park]
users.changeUser(kim, choi);
