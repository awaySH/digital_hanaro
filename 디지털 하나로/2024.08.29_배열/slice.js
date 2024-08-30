const arr2 = [1, 2, 3, 4, 5];

console.log(arr2.slice(1, 3));

console.log(arr2.slice(2, -1));

arr2.splice(1, 3);
console.log("🚀 ~ arr2:", arr2);

arr2.splice(1, 0, 2, 3, 4);
console.log("🚀 ~ arr2:", arr2);

arr2.splice(3);
console.log("🚀 ~ arr2:", arr2);

arr2.splice(3, 0, 4, 5);
console.log("🚀 ~ arr2:", arr2);

arr2.splice(2, 0, "X", "Y", "Z");
console.log("🚀 ~ arr2:", arr2);

let arr3 = [1, 2, 3, 4, 5];
arr3 = arr3.slice(0, 2).concat("X", "Y", "Z", arr3.slice(2));
console.log("🚀 ~ arr3:", arr3);

const objs = [{ id: 1 }, { name: "Hong" }, { addr: "Seoul", id: 5 }];
const combinedObj = objs.reduce((acc, obj) => ({ ...acc, ...obj }), {});
console.log("🚀 ~ combinedObj:", combinedObj);
