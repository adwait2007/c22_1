const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var engine,world;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	engine=Engine.create();
	world=engine.world;
	 
	var ground_options = {
		isStatic: true
	}
  
	var package_options = {
		isStatic: true,
		restitution:1.0		
	}
  
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	packageBody = Bodies.circle(width/2 , 200 ,5 , package_options );
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 ,ground_options );
 	World.add(world, ground);

}


function draw() {

  background(0);
  Engine.update(engine);

  rectMode(CENTER);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

 drawSprites();
 
}

// key pressed is called when key is pressed, this function is triggered automatiocally 
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
  
  Matter.Body.setStatic(packageBody,false);
    
  }
}