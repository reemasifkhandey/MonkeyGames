//creating variables globally
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup, bananaGroup;
var survivalTime=0;

function preload(){
  //loading images
  monkey_running=     loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png",
                                    "sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
  //creating canvas
  createCanvas(600,600);
  
  //creating the monkey
  monkey=createSprite(100,500);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  
 //creating ground
  ground=createSprite(590,550,900,10);
  ground.x=ground.width/2;
}

//bananaGroup = new Group();

function draw() {
  
  //setting the background colour to lightblue
  background("lightblue");
  
  //survival time
  textSize(20);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate());
  text("Survival Time:" + survivalTime,400,50);
  
 
  //ground
  ground.velocityX=-4;

  if(ground.x>0){
    ground.x=ground.width/2;
  }
  
   //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8

   //stop the monkey from falling down
   monkey.collide(ground);
  
   food();
   obstacle();
   drawSprites();
}

function food(){
  if(frameCount%80===0){
    banana=createSprite(500,random(320,400));
    banana.addImage("b",bananaImage);
    banana.scale=0.1;
    banana.velocityX=-2;
    banana.lifetime=250;
    //bananaGroup.add(banana);
    monkey.depth=banana.depth;
    monkey.depth=1;
    
  }
}
 function obstacle(){
   if (frameCount%300===0){
     obstacles=createSprite(400,500);
     obstacles.addImage("o",obstacleImage);
     obstacles.velocityX=-2;
     obstacles.scale=0.3;
     obstacles.lifetime=250;
   }
 }



