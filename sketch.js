const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,30,400,20);

	bob1 = new Bob(300,290);
	rope1 = new Rope(bob1.body,roof.body,-100,0);

	bob2 = new Bob(350,290);
	rope2 = new Rope(bob2.body,roof.body,-50,0);

	bob3 = new Bob(400,290);
	rope3 = new Rope(bob3.body,roof.body,0,0);

	bob4 = new Bob(450,290);
	rope4 = new Rope(bob4.body,roof.body,50,0);

	bob5 = new Bob(500,290);
	rope5 = new Rope(bob5.body,roof.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();

  rope1.display();
  bob1.display();

  rope2.display();
  bob2.display();

  rope3.display();
  bob3.display();

  rope4.display();
  bob4.display();

  rope5.display();
  bob5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-114,y:0});
	}
  }