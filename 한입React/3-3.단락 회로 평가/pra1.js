//AND 단락회로평가
//앞이 false면 뒤에를 검사해도 false가 나오기 때문에
//뒤에 조건은 확인하지 않고 그 값을 반환
console.log(false && true);
//OR 단락회로평가
//앞이 true이면 true 반환하고 뒤에조건 확인하지 않음
console.log(true || false);
//앞에가 True거나 Truthy하면 그값을 반환하고 종료됨
//NOT
console.log(!true);

//단락 회로 평가 사용 전
const getName = (person) => {
  if (!person) {
    return "객체가 아닙니다";
  }
  return person.name;
};

let person;
const name = getName(person);
console.log(name);

//단락 회로 평가 사용 후
const getName2 = (person) => {
  //person 파라미터는 undefined를 받게됨
  return person2 && person2.name;
  //Truthy && Falsy
  //person이 false이기 때문에 person.name에 접근하지 않음
  //
};
let person2; //undefined -> Falsy
const name2 = getName(person2);
console.log(name2);

const getName3 = (person3) => {
  const name3 = person3 && person3.name;
  //person3이 undefined가 아니기 때문에 Truthy
  //person3.name도 Truthy
  //name3에는 전주성이 들어감
  return name3 || "객체가 아닙니다";
  //앞에가 True거나 Truthy하면 그값을 반환하고 종료됨
  // name이 반환됨
};
let person3 = { name: "전주성" };
const getName4 = (person4) => {
  const name4 = person4 && person4.name;
  //person4이 null임으로 Falsy
  //AND 연산자는 하나라도 Falsy가 나오면 그 값을 반환하고 종료
  //null 반환
  return name4 || "객체가 아닙니다";
  //앞에가 True거나 Truthy하면 그값을 반환하고 종료됨
  // name4==null이기 때문에 Falsy
  //"객체가 아닙니다"는 Truthy이기 때문에 이 값이 반환됨
};
let person4 = null;
const name4 = getName(person);
console.log(name4);
