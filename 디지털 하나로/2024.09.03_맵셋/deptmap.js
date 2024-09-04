const hrTeam = { id: 1, dname: "인사팀" }; // 홍길동 (인사팀)
const devTeam = { id: 2, dname: "개발팀" };
const depts = [hrTeam, devTeam]; // ⇒ deptMap = new Map();
const hong = { id: 1, name: "Hong", dept: 1 }; // hong.dept.name ⇒ deptMap.get(hong.dept)?.name
const kim = { id: 2, name: "Kim", dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: "Park", dept: 2 },
  { id: 4, name: "Choi", dept: 2 },
];

const deptMap = new Map();
deptMap.set(1, hrTeam);
deptMap.set(2, devTeam);

const empMap = new Map();
empMap.set(1, hong);
empMap.set(2, kim);

const empDept = new Map();

for (let i = 1; i <= deptMap.size; i++) {
  //   empDept.set(empMap[i], deptMap[i]);
  empDept.set(empMap.get(i), deptMap.get(i));
}

console.log(deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)
console.log(empMap); // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }
console.log(empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

console.log(empDept.get(kim).dname); // '개발팀'

const hong2 = { id: 1, name: "Hong", dept: "HR" };
const kim2 = { id: 2, name: "Kim", dept: "Server" };
const lee = { id: 3, name: "Lee", dept: "Front" };
const park = { id: 4, name: "Park", dept: "HR" };
const ko = { id: 7, name: "Ko", dept: "Server" };
const loon = { id: 6, name: "Loon", dept: "Sales" };
const choi = { id: 5, name: "Choi", dept: "Front" };
const users = [hong2, kim2, lee, park, ko, loon, choi];

Array.prototype.uniqBy = function (prop) {
  const answer = new Set();

  for (const v of users) {
    // console.log(v.dept);
    if (prop == "dept") {
      answer.add(v.dept);
    }
  }
  console.log(answer);
};

users.uniqBy("dept"); // [ 'HR', 'Server', 'Front', 'Sales' ]

assert.deepStrictEqual(
  [...empDept.keys()],
  emps.map(({ id, name }) => ({ id, name }))
);
assert.strictEqual(empDept.get(kim)?.dname, devTeam.dname);
