const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(70, 90);
ctx.lineTo(230, 80);
ctx.lineTo(120, 230);
ctx.lineTo(150, 10);
ctx.lineTo(190, 230);
ctx.lineTo(60, 90);
ctx.closePath();

//테두리만 그리기
ctx.stroke();

//색상과 테두리 모두 보이게
// ctx.fillStyle = "yellow";
// ctx.fill();
// ctx.stroke();

//겉테두리만 보이게
// ctx.stroke();
// ctx.fillStyle = "yellow";
// ctx.fill();

//테두리는 표시하지 않게
// ctx.fillStyle = "yellow";
// ctx.fill();
