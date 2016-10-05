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
canvas.arc(407, 215, 20, 0, 2*Math.PI);
canvas.fillStyle = "orange";
canvas.fill();

canvas.beginPath();
canvas.moveTo(380,200);
canvas.lineTo(380,215);
canvas.lineTo(450,215);
canvas.fillStyle = "orange";
canvas.fill();

canvas.beginPath();
canvas.moveTo(400,204);
canvas.lineTo(400,224);
canvas.lineTo(470,224);
canvas.fillStyle = "BurlyWood";
canvas.fill();

canvas.beginPath();
canvas.rect(395, 230, 25, 60);
canvas.fillStyle = "DarkOliveGreen";
canvas.fill();
