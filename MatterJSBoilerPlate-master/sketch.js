var dust
var paper,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dust = new dustbin(1000,620)
	ground = new Ground(width/2, 650, width, 20);
	paper = new circle(40,600,40);
	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,height:700,wireFrames:false
		}
	}) 
	Engine.run(engine);
 	//Render.run(render) 
}


function draw() {
  rectMode(CENTER);
  background(0);
  

dust.display();
 ground.display();
  paper.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}

}

