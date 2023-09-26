const canvas = document.createElement("canvas");
canvas.width = 400; 
canvas.height = 400; 
document.body.appendChild(canvas); 

const ctx = canvas.getContext("2d");


ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100);


ctx.beginPath();
ctx.moveTo(150, 50);
ctx.lineTo(100, 150);
ctx.lineTo(200, 150);
ctx.closePath();
ctx.fillStyle = "green";
ctx.fill();


ctx.beginPath();
ctx.arc(300, 150, 50, 0, Math.PI * 2);
ctx.fillStyle = "blue";
ctx.fill();


ctx.beginPath();
ctx.moveTo(150, 50);

for (let i = 0; i < 5; i++) {
  ctx.lineTo(150 + 50 * Math.cos((Math.PI * 2 * i) / 5), 50 + 50 * Math.sin((Math.PI * 2 * i) / 5));
  ctx.lineTo(150 + 25 * Math.cos((Math.PI * 2 * (i + 0.5)) / 5), 50 + 25 * Math.sin((Math.PI * 2 * (i + 0.5)) / 5));
}

ctx.closePath();
ctx.fillStyle = "orange";
ctx.fill();