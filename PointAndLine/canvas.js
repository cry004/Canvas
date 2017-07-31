const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

let points = [];
addEventListener('resize',function(){
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  points = [];
  init();
})

function Point(){
  this.r = 3;
  this.x = Math.random() * (innerWidth - this.r * 2) + this.r;
  this.y = Math.random() * (innerHeight - this.r * 2) + this.r;
  this.dx = (Math.random() - .5) * 4;
  this.dy = (Math.random() - .5) * 4;
  this.ringRadius = 0;
  this.color = "#6ea3f1";

  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2,false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();


    c.beginPath();
    c.arc(this.x,this.y,Math.abs(this.ringRadius), 0, Math.PI * 2,false);
    c.strokeStyle = "white";
    c.stroke();
    c.closePath()
  }
  this.update = function(){

    if(this.x + this.r > canvas.width || this.x - this.r < 0){
      this.dx = -this.dx;
    }
    if(this.y + this.r > canvas.height || this.y - this.r < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

function init(){
  for(let i = 0; i < 30; i++){
    points.push(new Point)
  }
}

function animation(){
  requestAnimationFrame(animation);
  c.clearRect(0,0,canvas.width,canvas.height);
  points.sort(function(a,b){
    return b.y - a.y
  })
  const start  = points.shift();

  points.sort(function(a,b){
    const tanA = Math.atan2(a.y - start.y, a.x - start.x)
    const tanB = Math.atan2(b.y - start.y, b.x - start.x)
    return tanB - tanA
  });
  for(cc of points) {
    cc.update();
  }
}

init();
animation();
