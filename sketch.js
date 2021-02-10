const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var box;

function setup() {
  createCanvas(900,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  
 box1 = new Box(500,200,50,80);
 box2 = new Box(520,100,50,50); 
  
  //ground = Bodies.rectangle(200,380,400,20,options);
  //World.add(myWorld,ground);
  base = new Ground(450,380,900,20);

 }

function draw() {
  background("blue");
  Engine.update(myEngine);
  rectMode(CENTER);
 // rect(box.position.x,box.position.y,50,50)
 box1.display();
 base.display();
 box2.display();
  //rect(ground.position.x,ground.position.y,400,20)
  
}