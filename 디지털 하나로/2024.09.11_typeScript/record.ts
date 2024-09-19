type R = Record<string, number>;

// ex2) 다음 객체들을 하나로 합쳐(extend) 보세요.
let users = [{ name: "Hong" }, { age: 23 }, { id: 1, addr: "Seoul" }];

type Users = typeof users;

type FullUser1 = Record<string, string | number>;
// 무성의한 코드
type FullUser2 = Partial<Record<keyof Users[number], string | number>>;
// 모든 요소를 옵셔널로 변경
type FullUser = {
  [k in keyof Users[number]]: Users[number][k];
};

const ret: FullUser = users.reduce((acc, user) => ({ ...acc, ...user }), {});
