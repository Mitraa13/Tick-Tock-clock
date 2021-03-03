var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 
var bgimg;

function preload(){
  bgimg = loadImage("img1.jpg");
}

function setup(){
    createCanvas(1350,650);
}

function draw(){
    background(bgimg);
    drawSprites();

    textFont("Stencil");
    textSize(55);
    textAlign(CENTER);
    noStroke();
    fill("lightblue");
    text("TICK-TOCK CLOCK", width/2,height/2-200);

    textFont("Bernard MT Condensed");
    textSize(25);
    fill(0,0,255);
    text("BLUE stands for HOUR HAND", width/2,530);
    fill("deeppink");
    text("PINK stands for MINUTE HAND", width/2,560);
    fill(255,0,0);
    text("RED stands for SECONDS HAND", width/2,590);

    textFont("Bungee Inline");
    textSize(18);
    noStroke();
    fill("white");
    text("12", 670,215);
    text("1", 735,230); 
    text("2", 780,277);
    text("3", 790,330);
    text("4", 780,390);
    text("5", 735,430);
    text("6", 675,445);
    text("7", 615,430);
    text("8", 570,390);
    text("9",555,330);
    text("10",572,275);
    text("11",615,233);

    textFont("Bungee Inline")
    fill("white");
    textSize(25);
    text(hr + ":" + mn + ":" + sc,850,175);   
    textFont("Algerian")
    fill("lightblue");
    textSize(25);
    strokeWeight(2);
    stroke("black")
    text("By Mitraa",1100,620)

    translate(675,325)
    rotate(-90)

    angleMode(DEGREES);   

    hr = hour();
    mn = minute();
    sc = second();  

    strokeWeight(8);
    stroke(255, 150, 235);
    noFill();
    scAngle = map(sc, 0, 60, 0, 360);
    strokeWeight(8);
    stroke(154, 234, 101);
    mnAngle = map(mn,0,60,0,360);
    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr % 12,0,12,0,360);

    push();
    rotate(scAngle); 
    stroke(255,0,0);
    strokeWeight(6);
    line(0,0,100,0);
    pop()
 
    push();
    rotate(mnAngle);
    stroke("deeppink");
    strokeWeight(8);
    line(0,0,85,0);
    pop()
  
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(10);
    line(0,0,45,0);
    pop()

    stroke(255,255,255);
    point(0,0)

    strokeWeight(6);
    noFill();
    stroke(255,0,0);
    arc(0,0,330,330,0,scAngle);

    strokeWeight(7);
    stroke("deeppink");
    arc(0,0,300,300,0,mnAngle);

    strokeWeight(10);
    stroke(0,0,255);
    arc(0,0,270,270,0,hrAngle);
  
}