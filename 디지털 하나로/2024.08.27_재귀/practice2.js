const arr = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];

function makeObjectFromArray(arr) {
  const obj = {};
  let keys;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j == 0) {
        keys = arr[i][j];
        obj[keys] = [];
      } else {
        obj[keys].push(arr[i][j]);
      }
    }
  }

  return obj;
}

console.log(makeObjectFromArray(arr));

const obj = makeObjectFromArray(arr);

function makeArrayFromObject(obj) {
  const ans = [];
  for (const k of Object.keys(obj)) {
    const arr2 = [];
    arr2.push(k);
    for (const l of obj[k]) {
      arr2.push(l);
    }
    ans.push(arr2);
  }
  return ans;
}

console.log("🚀 ~ makeArrayFromObject:", makeArrayFromObject(obj));
