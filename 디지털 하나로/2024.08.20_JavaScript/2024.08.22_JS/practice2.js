// const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };

// const userInfo1 = user.id;
// const userInfo2 = user.name;
// const userInfo3 = user.addr;

// const userInfo = { id: userInfo1, name: userInfo2, addr: userInfo3 };

// console.log("🚀 ~ userInfo:", userInfo);

const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };
const { id, name, addr } = user;
const userInfo = { id, name, addr };

console.log("🚀 ~ user:", userInfo);
