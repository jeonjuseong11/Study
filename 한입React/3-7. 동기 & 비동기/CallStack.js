//자바스크립트의 동기처리
function one() {
  return 1;
}
function two() {
  return one() + 1;
}
function three() {
  return two() + 1;
}
console.log(three());
//자바스크리트의 비동기처리
function asyncAdd(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}
asyncAdd(1, 3, (res) => {
  console.log("결과 : ", res);
});
