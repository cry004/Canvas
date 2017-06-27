var canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');
var mouse = {x: undefined,y: undefined}
var rw = 20;
var barArray = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});


function Bar(x,w){
  this.x = x;
  this.y = 0;
  this.w = w;
  this.h = 10;

  this.draw = function(){
    c.fillStyle = "rgba(255,0,0,.5)";
    c.fillRect(this.x,this.y,this.w,this.h);
  }

}

function init(){
  barArray.length = 0;
  for(let i = 0; i <rw; i++){
    var x = i * canvas.width/rw;
    var w = canvas.width/rw - 1;
    barArray.push(Bar(x,w));
  }
}
function animation(){
  window.requestAnimationFrame(animation);
}
init();
