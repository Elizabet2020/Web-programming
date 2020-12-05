var c = document.getElementById("myCanvas");
var g = c.getContext("2d");

//треугольник
g.fillStyle = "#3366cc";
g.beginPath();
g.moveTo(150, 150);
g.lineTo(250, 150);
g.lineTo(150, 50);
g.fill();

//четверть окружности
g.beginPath();
g.moveTo(150, 150);
g.lineTo(100, 150);
var cp2x = 150 - 35*Math.sqrt(2);
var cp2y = 150 - 35*Math.sqrt(2) ;
g.bezierCurveTo(100, 150, cp2x, cp2y, 150, 100);
g.lineTo(150, 150);
g.fill();

// прямоугольник
g.beginPath();
g.fillRect(100, 150, 50, 100);
g.fill();

g.beginPath();
//ось X
g.moveTo(150,294.5);
g.lineTo(150,5.5);
g.lineTo(158,13.5);
g.moveTo(150,5.5);
g.lineTo(142,13.5);
g.moveTo(155, 250);
g.lineTo(145, 250);
g.moveTo(155, 200);
g.lineTo(145, 200);
g.moveTo(155, 50);
g.lineTo(145, 50);
g.moveTo(155, 100);
g.lineTo(145, 100);

//ось Y
g.moveTo(5.5,150);
g.lineTo(294.5,150);
g.lineTo(286.5,142);
g.moveTo(294.5,150);
g.lineTo(286.5,158);
g.moveTo(100, 145);
g.lineTo(100, 155);
g.moveTo(50, 145);
g.lineTo(50, 155);
g.moveTo(200, 145);
g.lineTo(200, 155);
g.moveTo(250, 145);
g.lineTo(250, 155);
g.stroke();

//подписи на осях
g.fillStyle = 'black';
g.font = "italic 10pt Arial";
g.textAlign = "left";
g.fillText("R", 155, 54);
g.fillText("R/2", 155, 104);
g.fillText("-R/2", 155, 204 );
g.fillText("-R", 155, 254);
g.fillText("-R", 44, 144);
g.fillText("-R/2", 90, 144);
g.fillText("R/2", 190, 144);
g.fillText("R", 246, 144);



