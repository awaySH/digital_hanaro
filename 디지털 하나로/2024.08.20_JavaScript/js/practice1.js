for (let i = 0.1; i <= 1; i = i + 0.1) {
  console.log(i);
  let j = i.toFixed(1);

  if (j == 1.0) {
    console.log("1");
  } else {
    console.log(j);
  }
}
