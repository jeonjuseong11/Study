function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      //res라는 지역상수에 저장
      resolve(res);
      //콜백 함수에 res값을 전달하여 값을 사용할 수 있게함
    }, 3000); //3초 뒤에 실행
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000); //1초뒤에 실행
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000); //2초 뒤에 실행
  });
}
const bPromiseResult = taskA(5, 1).then((a_res) => {
  console.log("A result : ", a_res);
  return taskB(a_res); //taskB를 호출해서 반환받은 promise
});
console.log("bla");
//다른 작업들을 삽입하기 쉽다
bPromiseResult
  .then((b_res) => {
    console.log("B result : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C result : ", c_res);
  });
