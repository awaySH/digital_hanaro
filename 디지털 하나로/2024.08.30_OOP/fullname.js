const assert = require("assert");

class Emp {
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }

  get fullName() {
    // accessor
    return `${this.firstName} ${this.lastName.toUpperCase()}`;
  }
}

const hong = new Emp();
hong.fullName = "Kildong Hong"; // split하여 firstName, lastName 셋
console.log(hong.fullName); // 'Kildong HONG' 출력하면 통과!
assert.strictEqual(hong.fullName, "Kildong HONG");
hong.fullName = "Lee";
console.log(hong.firstName, hong.lastName); // 'Kildong LEE' 출력하면 통과!
