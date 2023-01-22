//동기적 방식
function taskA() {
  console.log("A 작업 끝");
}
taskA();
console.log("코드 끝");
//결과
//A 작업 끝
//코드 끝

//비동기 방식
function taskB() {
  setTimeout(() => {
    console.log("A TASK END");
  }, 2000); //2초뒤에 콜백함수 실행
}
taskB();
console.log("코드 끝");
//결과
//코드끝
//A TASK END
