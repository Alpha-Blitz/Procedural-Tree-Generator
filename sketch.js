var delta;
var pi;
var j=2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pi=PI;
  delta=(pi/6+pi/4)/2;
}

function draw() {
  background(220);
  branch(110,pi/2,width/2,height);
  noLoop();
}

function branch(l,o,x,y){
  if(l<2)
    {
      fill(3,225,1);
      ellipse(x,y,5,5);
    }
  
  else
    {
      stroke(50,8,8);
      strokeWeight(l/10);
      line(x,y,x+l*cos(o),y-l*sin(o));
      for(var i=0;i<j;i++){
      branch(l*2/3*random(0.65,1.48),o+delta*random(-1,1),x+l*cos(o),y-l*sin(o));
      }
    }
}