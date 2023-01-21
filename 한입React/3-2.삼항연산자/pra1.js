let a = 3;
//삼항연산자 사용전
if (a >= 0) {
  console.log("양수");
} else {
  console.log("음수");
}
//삼항연산자를 사용 후
a >= 0 ? console.log("양수") : console.log("음수");

//삼항연산자 사용전
let b = [];
if (b.length === 0) {
  console.log("빈 배열");
} else {
  console.log("안 빈 배열");
}
//삼항연산자 사용 후
b.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");
//결과를 값으로 받아 사용할 수 있음
const arrayStatus = b.length === 0 ? "빈 배열" : "안 빈 배열";
console.log(arrayStatus);

//Truthy와 Falsy 사용 가능
let c; //undefined
const result = c ? true : false;
console.log(result); //false
