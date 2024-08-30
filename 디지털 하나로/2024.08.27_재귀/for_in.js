const arr = [100, 200, 300, 400, 500, 600, 700];

// for (const k of Object.keys(arr)) {
//   console.log("keys", k);
// }

// for (let index in arr) {
//   console.log("keys", index);
// }

// for (const k of Object.values(arr)) {
//   console.log("values", k);
// }

const obj = { name: "Kim", addr: "Yongsan", level: 1, role: 9, receive: false };

for (const k in obj) {
  console.log("keys", k);
}

for (const k in obj) {
  console.log("values", obj[k]);
}

for (const k of Object.values(obj)) {
  console.log("values2", k);
}

Object.defineProperty(obj, "level", {
  enumerable: false,
});

Object.defineProperty(obj, "role", {
  writable: false,
});
