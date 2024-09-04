const moment = require("moment");
// 1) 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.
console.log(moment("2020-01-01").diff(moment("2020-01-02"), "seconds"));

function getRandom(count) {
  const dates = [];
  const start = moment().startOf("month");
  const end = moment().endOf("month");
  const daysIn = end.date();

  for (let i = 0; i < count; i++) {
    const randomDay = Math.floor(Math.random() * daysIn) + 1;
    const randomDate = moment().date(randomDay);
    dates.push(randomDate);
  }

  return dates;
}

const randomDates = getRandom(5);
randomDates.sort((a, b) => b - a);
const formattedDates = randomDates.map((date) => date.format("YYYY-MM-DD"));
console.log(formattedDates);

// 3) 내년(2025년)의 오늘(9월 3일)의 요일을 출력하시오.
const next_year = parseInt(moment().startOf("years").format("yyyy"), 10) + 1;
const today = moment().format("MM-DD");

console.log(moment(`${next_year}-${today}`).format("dddd"));

// 4) 오늘(9월 3일)로 부터 100일 후의 날짜는?
const today2 = moment();
console.log(moment().add(100, "days").format("YYYY-MM-DD"));
