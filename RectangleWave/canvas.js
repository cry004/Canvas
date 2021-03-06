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

window.addEventListener("mousemove", function(e) {
	mouse.x = e.clientX;
	mouse.y = e.clientY;
});



function Bar(x,w,time){
  this.x = x;
  this.y = 0;
  this.w = w;
  this.h = 0;
  this.time = time;

  this.update = function(){
    this.time += .01;


    var distance = {
      x: mouse.x - this.x,
      y: mouse.y - canvas.height + this.h
    }

    if ( distance.x > 0 && distance.x < this.w){
      this.h +=  (canvas.height - this.h - mouse.y) / 20;
    } else if( distance.x > this.w * -1 && distance.x < 0 || distance.x > this.w && distance.x < this.w * 2 ){
      if(canvas.height - this.h - mouse.y  > 0 ){
        this.h +=  (canvas.height - this.h - mouse.y * 1.2 ) / 50;
      }else{
        this.h +=  (canvas.height - this.h - mouse.y * .8 ) / 50;
      }
    }else {
      this.h += (Math.abs(Math.sin(this.time) * canvas.height )/2 - this.h)
    }
    //this.h += (Math.abs(Math.sin(this.time) * canvas.height )/2 - this.h)
    this.draw();
  }
  this.draw = function(){
    c.fillStyle = 'hsl('+Math.abs(Math.sin(this.time) * 255)+', 50%, 50%)';
    c.fillRect(this.x,canvas.height-this.h,this.w,this.h);
  }
}

function init(){
  var time = 0;
  barArray.length = 0;
  for(let i = 0; i <rw; i++){
    var x = i * canvas.width/rw;
    var w = canvas.width/rw - 1;
    time += 0.1;
    barArray.push(new Bar(x,w,time));
  }

}
function animation(){
  // c.fillStyle = 'rgba(0,0,0,0.1)';
  // c.fillRect(0,0,canvas.width,canvas.height);
  c.clearRect(0, 0, canvas.width, canvas.height);
  barArray.forEach((bar)=>{
    bar.update();
  })
  window.requestAnimationFrame(animation);
}
init();
animation();
