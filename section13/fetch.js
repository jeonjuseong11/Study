const quotesURL = "http://dummyjson.com/quotes";

fetch(quotesURL) //자료 가져오기
  .then((response) => response.json()) //결과 response를 객체로 변환
  .then((data) => {
    //콘솔에 찍기
    console.log(data);
  })
  .catch((error) => console.log(error));
