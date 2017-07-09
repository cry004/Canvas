var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
//rect
c.fillStyle = "rgba(255,0,0,.5)";
c.fillRect(100,100,150,150);
c.fillStyle = "rgba(0,255,0,.5)";
c.fillRect(500,200,150,150);
c.fillStyle = "rgba(0,0,255,.5)";
c.fillRect(200,300,150,150);

//line
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,300);
c.strokeStyle = "#f00";
c.stroke();
c.closePath();

//arc
// c.beginPath();
// c.arc(300,300,30,0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

//duplicate
for(let i = 0; i<300 ; i++){
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let color = '#' + Math.floor(Math.random()*16777215).toString(16);

  c.beginPath();
  c.arc(x,y,30,0,Math.PI *2, false);
  c.strokeStyle = color;
  c.stroke();
}
