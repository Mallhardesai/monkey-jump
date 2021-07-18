var monkey,banana
var obstacle,obstacleGroup,foodGroup
var score
var backGround, player_running, bananaImage, obstacleImage, backImage
var invisible_ground

function preload(){
  backImage=loadImage("jungle.jpg");
 
  player_running =  loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
    

}

function setup( ) {
  createCanvas(400, 400);
  backGround = createSprite(200,200,400,400);
  backGround.addImage("backImage",backImage);
  
     
  monkey = createSprite(35,350,10,10)
  monkey.addAnimation("running",player_running);
  monkey.scale = 0.1;
  
  foodGroup= createGroup("banana")
  obstacleGroup = createGroup("obstacle")
 
}

function draw() {
  background(220);
  
  backGround.velocityX = -5;
  if(backGround.x < 0 ){
    backGround.x = backGround.width/2;}
    
    invisible_ground = createSprite(200,370,400,5)
    invisible_ground.visible = false;
 
   if(World.frameCount % 60 === 0) {
    obstacle = createSprite(400,370,10,10)
 obstacle.addImage("obstacle",obstacleImage);
obstacle.scale = 0.08;
    obstacle.velocityX = -6;
     obstacle.lifetime = 70;
  
}

  if(World.frameCount % 85 === 0) {
    banana = createSprite(400,250,10,10)
banana.addImage("banana",bananaImage);
banana.scale = 0.06;
    banana.velocityX = -6;
  
}
  
  
  if(keyDown("space")&& monkey.y >= 300){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(invisible_ground)
 
if(obstacleGroup.isTouching(monkey)){
  monkey.scale = 0.2;}
  
  if(foodGroup.isTouching(monkey)){
   score = score+2;
}

switch(score){
    case 10 :monkey.scale = 0.22;
    break;
    case 20 :monkey.scale = 0.24;
    break;
    case 30 :monkey.scale = 0.26;
    break;
    case 40 :monkey.scale = 0.28 
}
    
  //scoring
   var count = Math.round(World.frameCount/4);
  text("Score: "+ count, 250, 100);
  
  drawSprites()
  
}