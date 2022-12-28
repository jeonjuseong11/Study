const url = "https://reqres.in/api/products/10";
const result = document.querySelector("#result");

let xhr = new XMLHttpRequest(); //새로운 XMLHttpRequest객체 만듦
xhr.open("GET", url, true); //방식, 자료위치, 비동기 여부
xhr.send();

xhr.onreadystatechange = function () {
  //XMLHttpRequest 객체 안에 있는 readytState가 변할때 실행하는 이벤트
  if (xhr.readyState === 4 && xhr.status === 200) {
    //성공여부 확인
    let product = JSON.parse(xhr.responseText); //JSON 형식으로 바꿔줌
    console.log(product);
    result.innerHTML = `      
      <p>상품명 : ${product.data.name}</p>
      <p>생산년도 : ${product.data.year}</p>
      `; //result div안에 새로운 p 태그들 생성
  }
};
