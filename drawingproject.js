var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.beginPath();
canvas.rect(530, 240, 10, 100);
canvas.fillStyle = "brown";
canvas.fill();

canvas.beginPath();
canvas.rect(520, 240, 178, 10);
canvas.fillStyle = "brown";
canvas.fill();

canvas.beginPath();
canvas.rect(678, 240, 10, 100);
canvas.fillStyle = "brown";
canvas.fill();

canvas.beginPath();
canvas.rect(565, 235, 30, 10);
canvas.fillStyle = "White";
canvas.fill();

canvas.beginPath();
canvas.rect(570, 225, 20, 15);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.arc(573, 225, 5, 0, 2*Math.PI);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.arc(587, 225, 5, 0, 2*Math.PI);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.arc(395, 224, 15, 0, 2*Math.PI);
canvas.fillStyle = "orange";
canvas.fill();

canvas.beginPath();
canvas.arc(402, 225, 2, 0, 2*Math.PI);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.arc(404, 225.5, 2, 0, 2*Math.PI);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.arc(406, 226, 2, 0, 2*Math.PI);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.arc(408, 226.5, 2, 0, 2*Math.PI);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.arc(410, 227, 2, 0, 2*Math.PI);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.arc(412, 227.5, 2, 0, 2*Math.PI);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.arc(414, 228, 2, 0, 2*Math.PI);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.arc(416, 228.5, 2, 0, 2*Math.PI);
canvas.fillStyle = "BurlyWood";
canvas.fill();

for(var i = 0; i < 8; i++){
  canvas.beginPath();
  canvas.arc(402 + i*2, 228.5 + i/4, 2, 0, 2*Math.PI);
  canvas.fillStyle = "BurlyWood";
  canvas.fill();
}

for(var i = 0; i < 8; i++){
  canvas.beginPath();
  canvas.arc(402 + i*2, 232 + i/4, 2, 0, 2*Math.PI);
  canvas.fillStyle = "BurlyWood";
  canvas.fill();
}

for(var i = 0; i < 8; i++){
  canvas.beginPath();
  canvas.arc(402 + i*2, 232, 2, 0, 2*Math.PI);
  canvas.fillStyle = "BurlyWood";
  canvas.fill();
}

canvas.beginPath();
canvas.arc(416, 230, 5, 0, 2*Math.PI);
canvas.fillStyle = "black";
canvas.fill();


canvas.beginPath();
canvas.arc(376, 215, 2, 0, 2*Math.PI);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.arc(378, 215.5, 2, 0, 2*Math.PI);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.arc(380, 216, 2, 0, 2*Math.PI);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.arc(382, 216.5, 2, 0, 2*Math.PI);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.arc(384, 217, 2, 0, 2*Math.PI);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.arc(386, 217.5, 2, 0, 2*Math.PI);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.arc(388, 218, 2, 0, 2*Math.PI);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.arc(390, 218.5, 2, 0, 2*Math.PI);
canvas.fillSt3yle = "BurlyWood";
canvas.fill();

for(var i = 0; i < 8; i++){
  canvas.beginPath();
  canvas.arc(376 + i*2, 218.5 + i/4, 2, 0, 2*Math.PI);
  canvas.fillStyle = "BurlyWood";
  canvas.fill();
}

for(var i = 0; i < 8; i++){
  canvas.beginPath();
  canvas.arc(376 + i*2, 212 + i/4, 2, 0, 2*Math.PI);
  canvas.fillStyle = "BurlyWood";
  canvas.fill();
}

for(var i = 0; i < 8; i++){
  canvas.beginPath();
  canvas.arc(376 + i*2, 212, 2, 0, 2*Math.PI);
  canvas.fillStyle = "BurlyWood";
  canvas.fill();
}


canvas.beginPath();
canvas.arc(400, 220, 4, 0, 2*Math.PI);
canvas.fillStyle = "black";
canvas.fill();

canvas.beginPath();
canvas.rect(385, 239, 20, 55);
canvas.fillStyle = "DarkOliveGreen";
canvas.fill();

canvas.beginPath();
canvas.lineWidth=6;
canvas.strokeStyle = "DarkOliveGreen";
canvas.moveTo(387,289);
canvas.lineTo(375,310);
canvas.lineTo(345,330);
canvas.stroke();

canvas.beginPath();
canvas.lineWidth=6;
canvas.strokeStyle = "DarkGray";
canvas.lineTo(375,310);
canvas.lineTo(345,330);
canvas.stroke();


canvas.beginPath();
canvas.lineWidth=6;
canvas.strokeStyle = "DarkOliveGreen";
canvas.moveTo(403,289);
canvas.lineTo(405,310);
canvas.lineTo(375,330);
canvas.stroke();

canvas.beginPath();
canvas.lineWidth=6;
canvas.strokeStyle = "DarkGray";
canvas.moveTo(405,310);
canvas.lineTo(375,330);
canvas.stroke();

canvas.beginPath();
canvas.lineWidth=6;
canvas.strokeStyle = "DarkOliveGreen";
canvas.moveTo(387,259);
canvas.lineTo(367,280);
canvas.lineTo(340,265);
canvas.stroke();

canvas.beginPath();
canvas.lineWidth=6;
canvas.strokeStyle = "DarkOliveGreen";
canvas.moveTo(457,259);
canvas.lineTo(430,280);
canvas.lineTo(403,265);
canvas.stroke();
