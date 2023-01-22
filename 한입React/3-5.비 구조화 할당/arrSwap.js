//a와 b의 값을 서로 바꿔주는 것
let a = 10;
let b = 20;
let tmp = 0;
tmp = a;
a = b;
b = tmp;
console.log(a, b);
//20, 10
//비구조화 할당을 통해 코드를 줄일 수 있음
let a1 = 10;
let b1 = 20;
[a1, b1] = [b1, a1];
console.log(a1, b1);
//20, 10
