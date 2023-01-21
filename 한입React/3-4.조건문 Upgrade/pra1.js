function isKoreanFood(food) {
  if (food === "불고기" || food === "비빔밥" || food === "떡볶이") {
    return true;
  }
  return false;
}

const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("파스타");
console.log(food1); //true
console.log(food2); //false
//한식종류들을 다 알아보려면 너무 길어진다
//입력받은 파라미터가 존재하는지 알아보는 배열의 내장함수인 includes 활용하여 복잡한 조건문을 간략하게 할 수 있음
function isKoreanFood(food) {
  if (f[("불고기", "떡볶이", "비빔밥")].includes(food)) {
    return true;
  }
  return false;
}
