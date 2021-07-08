const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject1,paperObject2;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject1 = new Paper(550,300);
	paperObject2 = new Paper(555,300);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObject1.display();
  paperObject2.display();


}
function keyPressed(){
	if(keyDown(UP_ARROW)){
    Matter.Body.applyForce(paperObject1.body,paperObject1.body.position,{x:250,y:-350});
	}
	
	
	if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(paperObject2.body,paperObject2.body.position,{x:250,y:-350});
	}
	
}

