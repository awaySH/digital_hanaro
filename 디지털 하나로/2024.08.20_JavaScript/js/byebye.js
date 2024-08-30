var sum = 0;
for (let i = 0; i <= 100; i += 1) {
  sum = sum + i;
}
console.log("🚀 ~ sum:", sum);

sum = 0;
let i = 1;
// while()

while (i <= 100) {
  sum += i;
  i += 1;
}

console.log("🚀 ~ sum:", sum);

sum = 0;
i = 0;
do {
  i += 1;
  sum += i;
} while (i < 100);

// i <= 100 으로 하면 101때까지 실행

console.log("🚀 ~ sum:", sum);

if (sum > 0 && sum <= 10) {
  console.log("sum = ", sum);
} else if (sum > 10) {
  console.log("sum is over 10!");
} else {
  console.log("sum is zero!");
}

console.log(sum > 10 ? "진짜 크다!" : "진짜 작다!");

const mbti = "isfj";

let sports;

if (mbti == "isfj") {
  sports = "사격";
} else if (mbti == "isfp") {
  sports = "펜싱";
} else {
  sports = "운동";
}

console.log("sports = ", sports);

switch (mbti) {
  case "isfj":
    sports = "사격";
    break;
  case "isfp":
    sports = "펜싱";
    break;
  default:
    sports = "운동";
    break;
}

console.log("sports = ", sports);
