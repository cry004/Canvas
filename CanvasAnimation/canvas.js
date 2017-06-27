var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
  x: undefined,
  y: undefined
}
var maxR = 50;
var minR = 2;
window.addEventListener('mousemove',function(event){
  mouse.x = event.x;
  mouse.y = event.y;
})
window.addEventListener('resize',function(event){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
})

function Circle(x,y,dx,dy,r,color){
  this.x = x;
  this.y = y;
  this.dx =dx;
  this.dy = dy;
  this.r = r;
  this.color = color;
  let tempr = this.r;

  this.draw = function(){
    c.beginPath();
    c.arc(this.x,this.y,this.r,0,Math.PI*2,false);
    c.strokeStyle = "black";
    //c.strokeStyle = color;
    //c.stroke();

    c.fillStyle = color;
    c.fill();
  }
  this.update = function(){
    if( this.x+this.r > innerWidth || this.x - this.r < 0){
      this.dx = -this.dx;
    }
    if(this.y+this.r > innerHeight || this.y-this.r < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y <50 && mouse.y - this.y > -50) {
      if(this.r < maxR){
        this.r += 1;
      }
    }else if (this.r > tempr){
      this.r -= 1;
    }
    this.draw();
  }
}

var circleArray = [];

function init(){
  circleArray.length = 0;
  for(let i = 0; i <700; i++){
    var r = Math.random() * 15 + 1;
    var x = Math.random() * (innerWidth - r*2) + r;
    var y = Math.random() * (innerHeight - r*2) + r;
    var dx = (Math.random() - 0.5)* 4;
    var dy = (Math.random() - 0.5)* 4;
    let color = '#' + Math.floor(Math.random()*16777215).toString(16);
    circleArray.push(new Circle(x,y,dx,dy,r,color));
  }
}

function animation(){
  c.clearRect(0,0, innerWidth, innerHeight);
  for(cc of circleArray) {
    cc.update();
  }
  //circle.update();
  requestAnimationFrame(animation);
}
init();
animation();
