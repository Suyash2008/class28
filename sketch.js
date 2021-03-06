const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;
var box1,box2;
var bg;
var gamestates = "onsling";

function preload(){
  bg = loadImage("sprites/bg.png");
}

function setup(){
  createCanvas(1200,600);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,595,1200,10);
  box1 = new Box(800,550);
  box2 = new Box(1000,550);
  box3 = new Box(800,450);
  box4 = new Box(1000,450);
  box5 = new Box(900,350);
  pig1 = new Pig(900,550)
  pig2 = new Pig(900,450)
  angleMode(RADIANS)
  log1 = new Log(900,480,20,300,PI/2)
  log2 = new Log(900,380,20,300,PI/2)
  log3 = new Log(820,340,20,140,PI/7)
  log4 = new Log(980,350,20,140,-PI/7)
  bird = new Bird(200,200);
  platform = new Ground(160,460,320,260);
  sling = new Slingshot(bird.body,{x:200,y:180})

  
}
function draw(){
  background(bg);
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  text(mouseX,200,50);
  text(mouseY,250,50);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  pig1.display();
  pig2.display();
  bird.display();
  platform.display();
 
  sling.display();
}
function mouseDragged(){
  if(gamestates != "flying"){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
}
function mouseReleased(){
  sling.fly();
  gamestates = "flying";
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(bird.body,{x:200,y:200})
    sling.attach(bird.body);
  }
}