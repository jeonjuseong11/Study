let object = { one: "one", two: "two", three: "three", name: "전주성" };
//비구조화 할당 전
// let one = object.one;
// let two = object.two;
// let three = object.three;

//비구조화 할당 후
//name을 myName으로 할당하여 사용
//abc의 기본값 four로 지정
let { name: myName, one, two, three, abc = "four" } = object;
console.log(one, two, three, myName, abc);
