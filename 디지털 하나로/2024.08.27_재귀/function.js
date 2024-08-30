function f() {
  console.log("f", this.name);
}

f();
f.bind({ name: "binding1" })();
f.call({ name: "binding2" });

const boundF = f.bind({ name: "boundF" });

boundF();

const f2 = f;
f2.bind({ name: "binding3" })();
