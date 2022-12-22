const person = {
  name: "전주성", //멤버
  age: 23, //멤버
  say: function () {
    console.log(`안녕 나는 ${this.name}`);
  },
}; //메서드 -> 방법
person["say"](); //괄호표기법
person.say(); //점표기법
console.log(person.gender); //존재하지 않는 프로퍼티에 접근하면 undefined
console.log(`name : ${"name" in person}`); //person객체에 name이라는 프로퍼티가 있나?
// in을 사용하면 있으면 true 없으면 false를 반환한다.
