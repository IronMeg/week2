var syze =15

function setup() {
  createCanvas(500,500);
  noCursor();
}

function draw() {
  background(195,255,235);
  fill(255);
  //reference points
  // stroke(3);
  // ellipse(100,100,syze,syze);
  // ellipse(100,200,syze,syze);
  // ellipse(100,300,syze,syze);
  // ellipse(100,400,syze,syze);
  // ellipse(200,100,syze,syze);
  // ellipse(200,200,syze,syze);
  // ellipse(200,300,syze,syze);
  // ellipse(200,400,syze,syze);
  // ellipse(300,100,syze,syze);
  // ellipse(300,200,syze,syze);
  // ellipse(300,300,syze,syze);
  // ellipse(300,400,syze,syze);
  // rect(244.5,244.5,10,10);
  
  //Title
  textSize(30);
  fill(100,250,200);
  text("Happy Frog!",167,110);
  
  textSize(10);
  fill(0);
  text("move mouse up and down to open mouth",157,130);
  
   //eyes
  stroke(3);
  fill('rgba(100,250,200,.6)')
  ellipse(200,300,50+mouseY/15);
  ellipse(300,300,50+mouseY/15);
  //eyecover
  fill('rgb(195,255,235)');
  noStroke();
  rect(150,300,200,50)
  
  //mouth
  fill('rgb(100,100,100)');
  rect(150,300,200,mouseY/2,10,10);
  fill('rgb(255,100,100)');
  rect(200,300+mouseY/4,100,mouseY/4,20,20);
 
  
  //curser hover
  noStroke();
  fill('rgba(0,200,0,.25)');
  rect(mouseX,mouseY,12,12,2,2);
  fill('rgba(100,100,0,.30)');
  rect(mouseX+2,mouseY+1,3,3);
  rect(mouseX+5,mouseY+6,3,3);
  rect(mouseX+10,mouseY+4,2,3);
  rect(mouseX+1,mouseY+10,2,1);
}