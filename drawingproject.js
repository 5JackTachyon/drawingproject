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
