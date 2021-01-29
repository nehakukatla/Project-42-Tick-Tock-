var h, m, s, hAngle, mAngle, sAngle;

function setup() {
  createCanvas(600,600);

  //set angle mode to degrees
  angleMode(DEGREES);
}

function draw() {
  background("black");
  
  //translate all things 300 for x value and 200 for y value
  translate(300,200);
  //rotate all things 90 degrees to the left
  rotate(-90);

  h = hour();
  m = minute(); 
  s = second();

  //change the scale of all the things to 0-360 to be able to measure as degrees
  hAngle = map(h%12,0,12,0,360);
  mAngle = map(m,0,60,0,360);
  sAngle = map(s,0,60,0,360);

  //draw seconds had
  push();
  rotate(sAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
  //draw minutes hand
  push();
  rotate(mAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  //draw hours hand
  push();
  rotate(hAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  //create point at the center of the clock
  stroke(255,255,255);
  strokeWeight(7);
  point(0,0);

  //seconds arc
  noFill();
  strokeWeight(10);
  stroke(255,0,0);
  arc(0,0,260,260,0,sAngle);
  
  //minutes arc
  strokeWeight(12);
  stroke(0,255,0);
  arc(0,0,300,300,0,mAngle);

  //hours arc
  strokeWeight(15);
  stroke(0,0,255);
  arc(0,0,350,350,0,hAngle);

  //translate all things 200 for x value and -300 for y value
  translate(200,-300);

  //rotate all things 90 regrees to be straight
  rotate(90);

  //create labels
  fill("black");
  textSize(25);
  strokeWeight(5);

  stroke(255,0,0);
  text("red",390,500);

  stroke(0,255,0);
  text("green",200,500);

  stroke(0,0,255);
  text("blue",40,500);


  noStroke();
  fill("white");
  text("= hours",100,500);

  text("= minutes",270,500);

  text("= seconds",440,500);

}