const obj = { id: 1, name: "Hong" };

class Animal {
  static ID = 1;
  static isDog(ani) {
    return ani.name === "Dog";
  }
  // instance(this) + prototpye 생성! (무엇보다 먼저 실행!)
  constructor(name) {
    // {name: …}
    this.name = name || super.constructor.name;
  }
}
const dog = new Animal("Dog");
console.log("ok=", Object.keys(obj));
console.log("ak=", Object.keys(dog));
for (let k in dog) console.log("k=", k);
console.log("oh=", obj.hasOwnProperty("id"));
console.log("dh=", dog.hasOwnProperty("id"));

class Cat extends Animal {
  static IDD = 2;
  kukuki() {
    console.log("kookkkkk");
  }
}

const cat = new Cat("Happy");
console.log(Cat.ID); // 1
console.log(Cat.IDD); // 2
Animal.ID = 5;
console.log(Cat.ID); // 5
