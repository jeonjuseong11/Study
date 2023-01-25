let number = prompt("1보다 큰 숫자를 입력하세요.");
let sum = 0;

if (number !== null && number > 1) {
  //입력받은 수가 1보다 크고 null이 아니라면
  for (let i = 1; i <= number; i++) {
    //1~입력받은 수 까지
    if (i % 2 == 1) {
      //2로 나눴을 때 나머지가 1이면 넘어가고
      continue;
    }
    //아니면 sum에 더해준다
    sum += i;
    document.write(`${i} ----- ${sum} <br>`);
  }
}
