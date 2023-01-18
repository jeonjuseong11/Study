const getName = (person) => {
  // if (person === undefined || person === null) {
  if (!person) {
    //false NOT=>True
    //좀더 간단해짐(Truthy Falsy 사용 예시)
    return "객체가 아닙니다";
  }
  return person.name;
};
//let person = null;
let person; //undefined에 점표기법 사용 불가능
//let person = { name: "전주성" };
const name = getName(person);

console.log(name);
