const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]; //html 태그에 있던 배열 선언

for (let i = 0; i < arr.length; i++) {
  //배열 순회
  if (arr[i] > 10) {
    //순회하면서 10보다 크면
    document.write(`${arr[i]}, `); //웹 브라우저창에 출력
  }
}
