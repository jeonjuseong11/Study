const arr = [1, 2, 3, 4];
//forEach 내장함수 사용하기
arr.forEach(function (elm) {
  console.log(elm);
});

arr.forEach((elm) => console.log(elm)); //위와 같은 내용 실행

//arr 배열 값의 2배의 값을 저장하고 싶다면?
const newArr = [];
arr.forEach(function (elm) {
  newArr.push(elm * 2);
});
console.log(newArr); //너무 길어
//map 내장함수 사용
const newArr2 = arr.map((elm) => {
  return elm * 2;
});
console.log(newArr2);

let number = 3; //arr안에 3이 있는지 확인 할려면
if (elm === 3) {
  console.log(true);
} //너무 길어
//include 내장함수 사용
console.log(arr.includes(number));

const arr2 = [
  { num: 1, color: "red" },
  { num: 2, color: "blue" },
  { num: 3, color: "green" },
  { num: 4, color: "black" },
  { num: 5, color: "blue" },
]; //배열에 객체가 들어있을 경우 include, map 사용이 어려움
//findIndex 내장함수 사용
console.log(
  arr.findIndex((elm) => {
    return elm.color === "green";
    
  })
); // 해당 코드는 인덱스만 가져오게 된다
//인덱스가 아닌 요소에 직접 접근하고 싶다면

const idx = arr.findIndex((elm) => {
  return elm.color === "green";
});
console.log(arr[idx]); //이것도 좋지만 내장함수에 기능이 있음
//find 내장함수 이용
const element = arr.find((elm) => {
  return elm.color === "green";
});
console.log(element);

//color가 blue인 것만 가져오게
//filter 내장함수 사용
console.log(
  arr2.filter((elm) => {
    elm.color === "blue";
    
  })
); //color가 blue인 모든 객체의 모든 정보를 가져옴
con
//배열을 자르고 싶다면
//slice 내장함수 사용
console.log(arr2.slice(0, 3)); //0~2번째 까지의 배열이 반환됨

const arr3 = [
  { num: 1, color: "red" },
  { num: 2, color: "blue" },
  { num: 3, color: "green" },
  {}
];
const arr4 = [
  { num: 4, color: "black" },
  { num: 5, color: "blue" },
];
//arr3와 arr4를 붙이고 싶다면
//concat 내장함수 사용
console.log(arr3.concat(arr4));

let chars = ["나", "다", "가"];
//문자를 사전순으로 정렬하고 싶다면?
//sort 내장함수 사용
chars.sort();
console.log(chars);
let numbers = [1, 4, 2, 3, 5];

const compare = (a, b) => {
  if (a > b) {
    return 1; //큰 값이 더 뒤로 가야된다.
  } else if (a < b) {
    return -1; //작은 값이 더 앞으로 가야된다.
  } else {
    return 0; //같을 때는 자리 유지
  }
}; //오름차순 정렬됨
//-1,1의 위치를 바꿔주면 내림차순으로 변경가능
numbers.sort(compare);
console.log(numbers);

const textArr = ["hello", "I'm", "juseong"];
//배열에 요소들이 이어저도 상관 없을 때 = 문자열로 합치는 것
console.log(textArr.join(" ")); //요소들 사이의 공백을 준다는 뜻
