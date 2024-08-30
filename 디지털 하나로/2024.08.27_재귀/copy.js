function copyObject() {
  const kim = { nid: 3, nm: "Kim", addr: "Pusan" };
  const newKim = [];
  for (const k in kim) {
    newKim[k] = kim[k];
  }
  newKim.addr = "Daegu";
  console.log(kim.addr !== newKim.addr); // true면 통과!
}

function isObject(obj) {
  return !obj || typeof obj !== "object";
}

function copyObject2() {
  const kim = { nid: 3, nm: "Kim", addr: { city: "Pusan" } };
  const newKim = [];
  if (isObject(kim)) {
    return obj;
  }
  newKim.addr.city = "Daegu";
  console.log(kim.addr.city !== newKim.addr.city);
}

copyObject();
