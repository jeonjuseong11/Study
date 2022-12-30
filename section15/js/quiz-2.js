const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.font = "bold 300px sans-serif";
ctx.fillText("GOOD", 100, 320);

ctx.beginPath();
ctx.globalCompositeOperation = "source-in";
let img = new Image(); //이미지 객체 생성
img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height); //캔버스 크기에 맟춰 이미지 크기 조절
};
img.src = "images/text-bg.jpg";
