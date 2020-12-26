
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
monkey=createSprite(50,350,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(200,380,400,10)
  
  
}


function draw() {
background("blue")
  drawSprites()
  
  monkey.collide(ground)
  
  if(keyDown("space")){
    monkey.velocityY=-8
  
  }
  monkey.velocityY=monkey.velocityY+0.5
  spawnBanana()
  
  
  
  
}




function spawnBanana(){
  if(frameCount%100===0    ){
    banana=createSprite(400,200,20,20)
    banana.addImage(bananaImage)
    banana.velocityX=-3
    banana.scale=0.05
  }
  
  
}






