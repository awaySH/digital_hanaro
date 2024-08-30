function addPoints(a, b) {
  const alen = a.toString().length - Math.trunc(a).toString().length - 1;
  console.log("🚀 ~ addPoints ~ alen:", alen);
  const blen = b.toString().length - Math.trunc(b).toString().length - 1;
  console.log("🚀 ~ addPoints ~ blen:", blen);
  const bigger = alen > blen ? alen : blen;
  const ret = (a + b).toFixed(bigger);
  console.log("🚀 ~ addPoints ~ ret:", ret);
}

addPoints(2, 0.1);
addPoints(200.3, 0.112598);
