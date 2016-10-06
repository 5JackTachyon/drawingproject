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
