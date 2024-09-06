import assert from "assert";

function ex1() {
  function depthTimer(depth) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`depth${depth}`, new Date());
        if (depth >= 3) {
          reject(new Error("Already 3-depth!!"));
        } else {
          resolve(depth + 1);
        }
      }, depth * 1000);
    });
  }

  console.log("Start!", new Date());

  depthTimer(1)
    .then(depthTimer)
    .then(depthTimer)
    .catch((err) => console.log("Error:", err.message));
}

function ex2() {
  const promiseFn = (id = 1) =>
    new Promise((resolve, reject) => {
      console.log("id>>", id);
      if (id < 7) resolve(id + 1);
      else reject(new Error("어디로?" + id));
    });

  promiseFn(1)
    .then((res) => {
      console.log("res>>", res);
      return (
        promiseFn(res) ||
        Promise.reject(new Error("promise 객체가 반환되지 않았습니다."))
      );
    })
    .then((res) => {
      console.log("res2>>", res);
    })
    .catch((err) => console.log("Error>>", err));

  //   console.log("-----------------");

  //   promiseFn(1)
  //     .then((res) => {
  //       console.log("res1>>", res);
  //       promiseFn(res); // Need Return the Promise Object!!
  //     })
  //     .then((res) => {
  //       console.log("res2>>", res); // res가 undefined 이라면 ⇒ 여기서 throw 하면 될까?
  //     })
  //     .catch((err) => console.log("Error!!>>", err));
}

// ex2();

function ex3() {
  const vals = [1, 2, 3];
  const randTime = (val) =>
    new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

  promiseAll([randTime(1), randTime(2), randTime(3)])
    .then((arr) => {
      console.table(arr);
      assert.deepStrictEqual(arr, vals);
    })
    .catch(console.error);

  promiseAll([randTime(11), Promise.reject("RRR"), randTime(33)])
    .then((array) => {
      console.log("여긴 과연 호출될까?!");
    })
    .catch((error) => {
      console.log("reject!!!!!!>>", error);
    });
}

ex3();
