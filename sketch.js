var racerSize = 40;

var speed = 2;
var jerryX = 0
var jerryY = 100
var jennyX = 0
var jennyY = 100
var astorX = 0
var astorY = 100
var losserX = 0
var losserY = 100

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(200, 225, 255);

  strokeWeight(4);
  stroke(0)
  line(580, 0, 580, height);
  strokeWeight(1)

  ellipse(jerryX, jerryY, racerSize, racerSize);
  ellipse(jennyX, jennyY * 2, racerSize, racerSize);
  ellipse(astorX, astorY * 3, racerSize, racerSize);
  ellipse(losserX, losserY * 4, racerSize, racerSize);
  
  
  
  
  jerryX = jerryX + speed * 2;
  
  jennyX =jennyX + speed * 1.2;
  
  astorX = astorX + speed * 1
  
  losserX =losserX + speed * 0.5
  
  
}