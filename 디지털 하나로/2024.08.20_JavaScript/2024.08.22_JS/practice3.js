const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];

const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;

console.log("🚀 ~ id3:", id3);
console.log("🚀 ~ id2:", id2);
console.log("🚀 ~ id1:", id1);
