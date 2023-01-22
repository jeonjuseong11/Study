//2초 뒤에 음수인지 아닌지 판단하는 것
function isPositive(number, resolve, reject) {
  //resolve와 reject를 콜백함수로 만듦
  setTimeout(() => {
    if (typeof number === "number") {
      //비동기 작업이 성공한 즉 resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      //비동기 작업 실패함 즉 reject
      reject("주어진 값이 숫자형 값이 아닙니다");
    }
  }, 2000);
}

// isPositive(
//   10,
//   (res) => {
//     console.log("성공적으로 수행 됨 : ", res);
//   },
//   (err) => {
//     console.log("실패하였음 : ", err);
//   }
// );

function isPositiveP(number) {
  const executor = (resolve, reject) => {
    //executor : 비동기 작업을 실질적으로 수행하는 함수
    setTimeout(() => {
      if (typeof number === "number") {
        //비동기 작업이 성공한 즉 resolve
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        //비동기 작업 실패함 즉 reject
        reject("주어진 값이 숫자형 값이 아닙니다");
      }
    }, 2000);
  };
  const asyncTask = new Promise(executor);
  //자동으로 executor 함수가 실행됨
  return asyncTask;
}
const res = isPositiveP(101);
//res 상수안에 비동기 처리 결과를 넣어둠

res
  .then((res) => {
    console.log("작업 성공 : ", res);
  })
  .catch((err) => {
    console.log("작업 실패 : ", err);
  });
