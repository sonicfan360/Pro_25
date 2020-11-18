const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var pbox_left, pbox_right, pbox_bottom;


function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;
paper1 = new paper(200,200,20);

pbox_bottom = new pbox(300,height,200,20)
	
	Engine.run(engine);
	


	
	ground = Bodies.rectangle(300, 650, width, 20 , {isStatic:true} );
	World.add(world, ground);
	
	
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
 
  paper1.display()
  pbox_bottom.display()
  rect(ground.position.x,ground.position.y,width,20)
  

   
}
function keyPressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:10,y:-15})
}
}