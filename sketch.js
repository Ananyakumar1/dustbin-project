
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,side,paper;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     
	ground = new Ground(600,height,1200,20)
	side1  = new Base(1000,305,170,170)
	side2  = new Side(911,317,15,145)
	side3  = new Side(1087,317,15,145)
	paperball = new Paper(100,100,40,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  keyPressed();
  ground.display();
  side1.display();
  side2.display();
  side3.display();
  paperball.display();
}

function keyPressed(){
   if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(paperball.body,paperball.body.position,{x:2,y:-2})
   }
}

