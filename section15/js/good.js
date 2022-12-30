const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); //렌더링 컨텍스트 만듦

ctx.beginPath();
ctx.font = "bold 300px sans-serif";
ctx.fillText("GOOD", 100, 320);
