{
  let a = 10;
  {
    let a = 20;
    console.log(a); //20
  }
  console.log(a); //10
}
console.log(a); //a is not defined

//함수로 했을 경우
(function () {
  var a = 10;
  (function () {
    var a = 20;
    console.log(a); //20
  })();
  console.log(a); //10
})();
console.log(a); //a is not deifned

//ES5 문법
function hasValue(p) {
  console.log(v); //undefined
  if (p) {
    var v = "blue";
    console.log(v); //blue
  } else {
    var v = "red";
    console.log(v); //blue
  }
  console.log(v);
}
hasValue(10);
//var는 블록스코프의 영향을 받지 않는다
//기존 ES5의 개념을 해치지 않고 새로운 기능을 만들어야하기 때문에 let const와 같은 것으로 블록스코프 영향을 받는 변수를 만들수 있게함
function hasValue(p) {
  console.log(v); //v is undefined
  if (p) {
    let v = "blue";
    console.log(v);
  } else {
    let v = "red";
    console.log(v);
  }
  console.log(v);
}
hasValue(10); //v is undefined

//Hoisting
if (true) {
  var a = 10;
  if (true) {
    console.log(a); //undefined
    var a = 20;
  }
  console.log(a); //10
}
console.log(a); //a is not defined
//1. 호이스팅
//기존 var : 변수명만 위로 끌어올리고
//값이 없으면 undefined를 할당

if (true) {
  let a = 10;
  if (true) {
    console.log(a); //reference Error : a is not defined
    const a = 20;
    console.log(a); //20
  }
  console.log(a);
}
console.log(a);
//let, const
//1) 변수명만 위로 끌어올리고 끝

//호이스팅이 된다면 a:undefined
//호이스팅이 안된다면 a:10
//하지만 결과는 reference Error
//TDZ : Temporal Dead Zone(임시사각지대)에 결리게 된다
//실제로 변수를 선언하는 위치가 오기 전에는 변수를 사용할 수 없음
