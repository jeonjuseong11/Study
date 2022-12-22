const person = {
  name: "전주성",
  age: 23,
  tall: 175,
};
//객체의 순회 방법 2가지
const personKeys = Object.keys(person);
for (let i = 0; i < personKeys.length; i++) {
  const curKeys = personKeys[i];
  const curValues = person[curKeys];
  console.log(`${curKeys} : ${curValues}`);
} //키값들을 배열로 반환하여 키값으로 프로퍼티의 값들을 가져온 것
const personValues = Object.values(person);
for (let i = 0; i < personValues.length; i++) {
  console.log(personValues[i]);
} //객체의 프로퍼티들을 배열로 반환하여 순회하며 출력
