const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const matter = Matter.Bodies;
const Body = Matter.Body;
var paperball;
var dustbin2, dustbin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	paperball = new Paper(100,600);

	dustbin2 = new Dustbin(300,600,20,100);
	dustbin3 = new Dustbin(500,600,20,100);

	ground = Bodies.rectangle(400,690,800,20, {isStatic : true});
	World.add(world, ground);

}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  paperball.display();
  dustbin2.display();
  dustbin3.display();

  rect(ground.position.x,ground.position.y,800,20);
  keyPressed();
  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:5,y:-5});
	}
}



