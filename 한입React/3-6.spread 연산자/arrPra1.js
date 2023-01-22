const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키", "초코칩쿠키"];

//2개의 배열을 합치려면 concat을 사용해도 되지만
//spread연산자 사용가능
//객체의 프로퍼티를 펼치는것처럼 배열의 원소를 순서대로 펼칠수 있음
const allCookies = [...noTopingCookies, "함정쿠키", ...topingCookies];
//중간의 값을 유연하게 넣을 수 있음
console.log(allCookies);
