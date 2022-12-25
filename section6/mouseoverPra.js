const imgBox = document.querySelector("#container > img");

imgBox.addEventListener("mouseover", () => {
  //mouseover이벤트 발생시 function 실행
  imgBox.src = "images/pic-6.jpg"; //imgBox의 주소를 변경하여 이미지를 바꾼다
});
imgBox.addEventListener("mouseout", () => {
  imgBox.src = "images/pic-1.jpg";
});
