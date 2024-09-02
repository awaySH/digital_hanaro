function* add() {
  const first = yield "첫번째 수는?";
  console.log("🚀 ~ function*add ~ first:", first);
  const second = yield "두번째 수는?";
  console.log("🚀 ~ function*add ~ second:", second);
  return `Total : ${first + second}`;
}

const itAdd = add();
console.log(itAdd.next().value);
console.log(itAdd.next(1).value);
console.log(itAdd.next(2).value);
