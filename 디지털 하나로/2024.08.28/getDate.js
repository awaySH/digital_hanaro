function getDiffMillis(dt1, dt2) {
  const d1 = new Date(dt1);
  const d2 = new Date(dt2);

  const { getTime: getTime1 } = new Date(dt1);
  const { getTime: getTime2 } = new Date(dt2);

  return Math.abs(getTime1.bind(d1)() - getTime2.bind(d2)());
}

// Date.prototype.getTime = function () {
//   return this.getMilliseconds();
// };

console.log(getDiffMillis("2021-01-01", "2021-01-02"));
