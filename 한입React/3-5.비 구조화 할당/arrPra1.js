let arr = ["one", "two", "three"];
//비구조화 할당 전
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// console.log(one, two, three);
//비구조화 할당 후
// let [one, two, three] = arr;
//더 줄일 수 있음
//배열의 선언분리 비구조화 할당
//let [one, two, three, four] = ["one", "two", "three"]; //four는 undefined
let [one, two, three, four = "four"] = ["one", "two", "three"]; //four는 기본값 four지정
