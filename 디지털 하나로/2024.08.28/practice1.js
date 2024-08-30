const dog = {
  name: "Maxx",
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(() => this.showMyName(), 1000);
  },
};

dog.whatsYourName();

// setTimeOut 함수의 첫 번째 인자로 함수가 들어가야함
// 따라서 화살표 함수로 만들어서 this.name을 전달
