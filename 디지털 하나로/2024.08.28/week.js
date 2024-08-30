const weeks = ["일", "월", "화", "수", "목", "금", "토"];

const getNextWeek = (() => {
  let widx = -1; // 함수 내부에서 widx를 관리
  return () => {
    widx += 1;
    if (widx >= weeks.length) widx = 0;
    return `${weeks[widx]}요일`;
  };
})();

let cnt = 0;
const intl = setInterval(() => {
  // try {
  //   widx += 2; // ReferenceError: widx is not defined 발생 예상
  // } catch (e) {
  //   console.log("부수 효과 실패:", e.message);
  // }

  console.log("call", cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 1000);
