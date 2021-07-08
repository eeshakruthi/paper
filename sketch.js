const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject,groundObject	
var world,Slingshot;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Bin(1200,650);
	Slingshot = new SlingShot(paperObject.body,{x:400,y:350});
	
	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background(230);

  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  Slingshot.display();
  drawSprites();
}
function mouseDragged(){
	Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	Slingshot.fly();
}

