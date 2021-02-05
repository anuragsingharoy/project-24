
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var engine, world;
var ground1;
var box1;
var box2;
var box3;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1 = new paper(50,50,20)
ground1 = new ground(400,680,800,20)

box1 = new Box(350,600,20,100)
    
	
box2 = new Box(450,650,200,20)

box3 = new Box(550,600,20,100)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display()
 ground1.display()
 box1.display()
 box2.display()
 box3.display()
 
drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:50, y:-50})
	}
}
	

	



