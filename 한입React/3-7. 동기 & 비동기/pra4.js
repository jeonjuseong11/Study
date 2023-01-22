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

function taskB(a, cb) {
  //cb:콜백함수
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000); //1초뒤에 실행
}

function taskC(a, cb) {
  //cb:콜백함수
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000); //2초 뒤에 실행
}

taskA(4, 5, (a_res) => {
  console.log("A result : ", a_res);
  taskB(a_res, (b_res) => {
    console.log("B result : ", b_res);
    taskC(b_res, (c_res) => {
      console.log("C result : ", c_res);
    });
  });
});
console.log("코드 끝");
//결과
//코드끝
//A result : 9
//B result : 18
//C result : -18
//콜백함수의 결과값을 또 다른 비동기처리의 값으로 전달할 수 있음
//BUT 너무 많이 하면 전달에 전달에 전달에 전달 식으로 콜백 지옥이 됨
