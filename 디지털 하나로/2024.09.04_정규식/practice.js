const assert = require("assert");

function ex1() {
  const total = { price: 45000, vat: 4500 };

  function fmt(tmplstrs, ...args) {
    // console.log("🚀  templstrs:", tmplstrs);
    // console.log("🚀  args:", args);
    args[0] = args[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let ret = tmplstrs[0];
    for (let i = 0; i < tmplstrs.length - 1; i += 1) {
      ret += args[i] + tmplstrs[i + 1];
    }

    return ret;
  }

  console.log(fmt`주문합계: ${total.price}원`);
  console.log(fmt`세액합계: ${total.vat}원`);
}
// ex1();

function ex2() {
  var pattern3 = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; //한글
  function checkBatchimEnding(word) {
    if (typeof word !== "string") return null;

    var lastLetter = word[word.length - 1];
    var uni = lastLetter.charCodeAt(0);

    if (uni < 44032 || uni > 55203) return null;

    return (uni - 44032) % 28 != 0;
  }
  function isEndJaum(str) {
    // if (pattern3.test(str[str.length - 1])) {
    //   console.log(checkBatchimEnding(str[str.length - 1]));
    // } else {
    //   console.log("한글이 아니다");
    // }
    console.log(checkBatchimEnding(str[str.length - 1]));
  }

  isEndJaum("아지오");
  isEndJaum("북한산");
  isEndJaum("알파벳L");
  //   assert.equal(isEndJaum("알파벳L"), true);
  //   assert.equal(isEndJaum("아지오"), false);
  //   assert.equal(isEndJaum("북한강"), true);
  //   assert.equal(isEndJaum("뷁"), true);
  //   assert.equal(isEndJaum("강원도"), false);
  //   assert.equal(isEndJaum("바라당"), true);
  //   assert.equal(isEndJaum("ㅜㅜ"), false);
  //   assert.equal(isEndJaum("케잌"), true);
  //   assert.equal(isEndJaum("점수 A"), false);
  //   assert.equal(isEndJaum("알파벳L"), true);
  //   assert.equal(isEndJaum("24"), false);
  //   assert.equal(isEndJaum("23"), true);
}

// ex2();

function ex3() {
  const s = ["강원도 고성군", "고성군 토성면", "토성면 북면", "북면", "김1수"];
  function cho_hangul(str) {
    cho = [
      "ㄱ",
      "ㄲ",
      "ㄴ",
      "ㄷ",
      "ㄸ",
      "ㄹ",
      "ㅁ",
      "ㅂ",
      "ㅃ",
      "ㅅ",
      "ㅆ",
      "ㅇ",
      "ㅈ",
      "ㅉ",
      "ㅊ",
      "ㅋ",
      "ㅌ",
      "ㅍ",
      "ㅎ",
    ];
    result = "";
    for (i = 0; i < str.length; i++) {
      code = str.charCodeAt(i) - 44032;
      if (code > -1 && code < 11172) result += cho[Math.floor(code / 588)];
    }
    return result;
  }
  cho_s = [];
  for (i of s) {
    cho_s.push(cho_hangul(i));
  }
  console.log(cho_s);
  function searchByKoreanInitialSound(s, str) {}
  //   assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅇ"), [
  //     "강원도 고성군",
  //   ]);
  //   assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅅㄱ"), [
  //     "강원도 고성군",
  //     "고성군 토성면",
  //   ]);
  //   assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅌㅅㅁ"), [
  //     "고성군 토성면",
  //     "토성면 북면",
  //   ]);
  //   assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅂㅁ"), [
  //     "토성면 북면",
  //     "북면",
  //   ]);
  //   assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅍㅁ"), []);
  //   assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱ1ㅅ"), ["김1수"]);
}

// ex3();

function ex4() {
  function upperToLower(str) {
    return str.replace(/([A-Z])/g, (mat) => {
      //   console.log(mat);
      return `*${mat.toLowerCase()}*-`;
    });
  }
  assert.strictEqual(
    upperToLower("Senior Coding Learning JS"),
    "*s*-enior *c*-oding *l*-earning *j*-*s*-"
  );

  const swapCase = (str) =>
    str.replace(/([A-Z]*)([a-z]*)/g, (_matchedStr, upper, lower) => {
      console.log(upper, lower);
      return `${upper.toLowerCase()}${lower.toUpperCase()}`;
    });
  console.log(
    "🚀 ~ swapCase ~ swapCase:",
    swapCase("Senior Coding Learning JS")
  );

  const telfmt = (str) => {
    const len = str.length;
    if (len < 7) return str;
    if (len <= 8) return str.replace(/(\d{3,4})(\d{4})$/g, "$1-$2");

    // const g3 = 4;
    const g1 = str.startsWith("02") ? 2 : len === 12 ? 4 : 3;
    const g2 = len - g1 - 4;
    // console.log(str, '->', g1, g2, g3);

    const regexp = new RegExp(`(\\d{${g1}})(\\d{${g2}})(\\d{4})$`, "g");
    return str.replace(regexp, "$1-$2-$3");
  };
  assert.deepStrictEqual(telfmt("0101234567"), "010-123-4567");
  assert.deepStrictEqual(telfmt("01012345678"), "010-1234-5678");
  assert.deepStrictEqual(telfmt("0212345678"), "02-1234-5678");
  assert.deepStrictEqual(telfmt("021234567"), "02-123-4567");
  assert.deepStrictEqual(telfmt("0331234567"), "033-123-4567");
  assert.deepStrictEqual(telfmt("15771577"), "1577-1577");
  assert.deepStrictEqual(telfmt("07012341234"), "070-1234-1234");
  assert.deepStrictEqual(telfmt("050712345678"), "0507-1234-5678");
}

// ex4();

function ex3() {
  const ㄱ = "ㄱ".charCodeAt();
  const ㅎ = "ㅎ".charCodeAt();
  const 가 = "가".charCodeAt();
  const 힣 = "힣".charCodeAt();
  const 자음알파벳숫자 = [..."LMNRlmnr136780"].map((a) => a.charCodeAt());

  function isEndJaum(str) {
    const s = str.charCodeAt(str.length - 1);
    // console.log('🚀  s:', s, str.charCodeAt(str.length - 1));
    console.log(str, s - 가, (s - 가) % 28, 자음알파벳숫자.includes(s));
    // if (s >= ㄱ && s <= ㅎ) return true;
    // if (자음알파벳숫자.includes(s)) return true;

    return (
      (s >= ㄱ && s <= ㅎ) ||
      자음알파벳숫자.includes(s) ||
      (s >= 가 && s <= 힣 && (s - 가) % 28 !== 0)
    );

    // return (
    //   (s - 가) % 28 !== 0 &&
    //   ((s >= ㄱ && s <= ㅎ) || 자음알파벳숫자.includes(s))
    // );
  }

  // console.log(isEndJaum('북한강'));
  // console.log(isEndJaum('아점수 A'));
  // return;
  assert.equal(isEndJaum("아지오"), false);
  assert.equal(isEndJaum("북한강"), true);
  assert.equal(isEndJaum("뷁"), true);
  assert.equal(isEndJaum("강원도"), false);
  assert.equal(isEndJaum("바라당"), true);
  // assert.equal(isEndJaum('ㅜㅜ'), false);
  assert.equal(isEndJaum("케잌"), true);
  assert.equal(isEndJaum("점수 A"), false);
  assert.equal(isEndJaum("알파벳L"), true);
  assert.equal(isEndJaum("24"), false);
  assert.equal(isEndJaum("23"), true);
}

// ex3();
