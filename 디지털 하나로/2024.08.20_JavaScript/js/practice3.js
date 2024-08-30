const today = new Date();
const day = today.getDay();
console.log("🚀 ~ day:", day);
var newday;

switch (day) {
  case 1:
    newday = "월요일";
    break;
  case 2:
    newday = "화요일";
    break;
  case 3:
    newday = "수요일";
    break;
  case 4:
    newday = "목요일";
    break;
  case 5:
    newday = "금요일";
    break;
  case 6:
    newday = "토요일";
    break;
  case 7:
    newday = "일요일";
    break;
}

console.log("오늘은", newday + "입니다.");
