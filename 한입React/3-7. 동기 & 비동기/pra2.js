//2개의 파라미터를 받아 2개를 더한 값을 구하는 기능
function taskA(a, b, cb) {
  //cb:콜백함수
  setTimeout(() => {
    const res = a + b;
    //res라는 지역상수에 저장
    cb(res);
    //콜백 함수에 res값을 전달하여 값을 사용할 수 있게함
  }, 3000); //3초 뒤에 실행
}
taskA(3, 4, (res) => {
  console.log("A TASK RESULT : ", res);
});

function taskB(a, cb) {
  //cb:콜백함수
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000); //1초뒤에 실행
}
taskB(7, (res) => {
  console.log("B TASK RESULT : ", res);
});
function taskC(a, cb) {
  //cb:콜백함수
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000); //2초 뒤에 실행
}
taskC(14, (res) => {
  console.log("C TASK RESULT : ", res);
});
console.log("코드 끝");
