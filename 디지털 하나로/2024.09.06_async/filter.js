const afterTime = (sec) =>
  new Promise((resolve, reject) => setTimeout(resolve, sec * 1000, sec));

// const odds = [1, 2, 3].filter(async (val) => {
//   const r = await afterTime(val);
//   console.log(r);
//   return r % 2 === 1;
// });
// console.log("odds=", odds);
// // 왜 2는 짝수인데 출력될까?

// const rrr = await Promise.all(
//   [1, 2, 3].map(async (val) => {
//     const r = await afterTime(val);
//     console.log(r);
//     return r % 2 === 1 ? r : null; // 홀수만 남기고 짝수는 null로 처리
//   })
// ).then((results) => results.filter((val) => val !== null)); // null 값을 필터링

const ps = [1, 2, 3].map(afterTime);
const rrr = (await Promise.all([1, 2, 3].map(afterTime))).filter((n) => n % 2);

// console.log("odds=", rrr);

// console.log(
//   `
// %c██╗   ██╗███████╗██╗      ██████╗  ██████╗
// %c██║   ██║██╔════╝██║     ██╔═══██╗██╔════╝
// %c██║   ██║█████╗  ██║     ██║   ██║██║  ███╗
// %c╚██╗ ██╔╝██╔══╝  ██║     ██║   ██║██║   ██║
// %c ╚████╔╝ ███████╗███████╗╚██████╔╝╚██████╔╝
// %c  ╚═══╝  ╚══════╝╚══════╝ ╚═════╝  ╚═════╝
// `,
//   "color:#22577A",
//   "color:#38A3A5",
//   "color:#57CC99",
//   "color:#80ED99",
//   "color:#99FFED",
//   "color:#FFFFFF"
// );
