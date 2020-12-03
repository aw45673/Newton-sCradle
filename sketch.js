
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(400,100,250,10)

	bob1=new Bob(320,400,20)
	bob2=new Bob(360,400,20)
	bob3=new Bob(400,400,20)
	bob4=new Bob(440,400,20)
	bob5=new Bob(480,400,20)

	string1=new String(bob1.body,roof.body,-80,0)
	string2=new String(bob2.body,roof.body,-40,0)
	string3=new String(bob3.body,roof.body,0,0)
	string4=new String(bob4.body,roof.body,40,0)
	string5=new String(bob5.body,roof.body,80,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
roof.display();
string1.display();
string2.display();
string3.display();
string4.display();
string5.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

 
}

function keyPressed(){
    if (keyCode===32){
        Body.applyForce(bob1.body,{x:-80,y:-80})
	}
}

