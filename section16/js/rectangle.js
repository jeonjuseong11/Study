const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Rect(x, y, width, height, color) {
  //사각형 객체 생성
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;

  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}

const box1 = new Rect(10, 10, 100, 100, "gray"); //작은 사각형
const box2 = new Rect(30, 30, 60, 60, "black"); //큰 사각형
box1.draw();
box2.draw();
