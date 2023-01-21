//학점 계산 프로그램
//90점 이상 A+
//50점 이상이면 B+
//둘다 아니면 F
let score = 100;
//중첩 삼항 연산자 사용 가능
//중첩은 가능하지만 가독성이 떨어져 if문으로 하는 것이 좋다
// score >= 90
//   ? console.log("A+")
//   : score >= 50
//   ? console.log("B+")
//   : console.log("F");
if (score >= 90) {
  console.log("A+");
} else if (score >= 50) {
  console.log("B+");
} else {
  console.log("F");
}
