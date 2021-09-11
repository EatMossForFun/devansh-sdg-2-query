var home ,homeimg;
var play,playimg;
var info,infoimg;
var manual,manualimg;
var level = 1;
var bg,bgimg;
var locate;
var player,playerimg;
var wasp,waspimg;
var scene,sceneimg;
var over,overimg;

var block1,block2,block3,block4;
var blockimg;
var value;
gameState = 0;


function preload(){


homeimg = loadImage("./images/home.png");
playimg = loadImage("./images/play.png");
infoimg = loadImage("./images/info.png");
manualimg = loadImage("./images/manual.png");
bgimg = loadImage("./images/bg.png");
blockimg = loadImage("./images/dirt.png")
sceneimg = loadImage("./images/scene.png");
playerimg = loadImage("./images/player.png");
waspimg = loadImage("./images/wasp3.png")
overimg = loadImage("./images/over.png")
}


function setup(){
  createCanvas(1350,600);


//home page
 home = createSprite(500,200,100,100);
 home.addImage(homeimg);
 home.scale=2;
 

 //play button
 play = createSprite(650,436);
 play.addImage(playimg);
 play.scale = 0.4;


//info button
 info = createSprite(650,260);
 info.addImage(infoimg);
 info.scale = 0.17;

 //user manual
 manual = createSprite(650,2060);
 manual.addImage(manualimg);
 manual.scale=0.7;

 //background 
 bg = createSprite(670,3400,100,100)
 bg.addImage(bgimg);
 bg.scale=1.2

 wasp = createSprite(1464,350)




locate = createSprite(1,1,1,1);

}


function draw(){
  background(0);

locate.x=mouseX;
locate.y=mouseY;




  //home page for the game
  if(gameState===0){
    

//scrolling home effect
home.velocityX=-5;
if(home.x<width/2){
  home.x=860
}

  //click to play
  if(mousePressedOver(play)){
    gameState=1;
play.destroy();
info.destroy();
home.destroy();
bg.y=340;
}

  //how to play?
  if(mousePressedOver(info)){
 manual.y=260;
}

//manual go back
if(mousePressedOver(manual)){
  manual.y=2060;
}


}


//structure of level1

if(locate.x>324 && locate.x<395 && mouseWentDown() && level===1 ){
  lvl1();
  bg.y=10000;
gameState=2;
}


//player movements

if(gameState===2){
  player.velocityY=player.velocityY+1
  player.collide(block1);
  player.collide(block2);
  player.collide(block3);
  player.collide(block4);
  player.collide(block5);
  





  //over
  if(player.y>500){
    player.destroy();
    gameState = over
  }

  

if(keyDown("a")){
  player.x=player.x-7;
}


if(keyDown("d")){
  player.x=player.x+7;
}

if(keyWentDown("space")&& player.y>=300 ){
   player.velocityY=-17
}


camera.x=player.x;
camera.y=player.y-100
camera.zoom=1.4
}

//game over
if(gameState===over){

  over = createSprite(player.x,player.y,40,40)
over.addImage(overimg);
over.scale=1.4


}
  drawSprites();

  text("x:"+locate.x+ " y:"+ locate.y,mouseX,mouseY);
 
textSize(24);

}


function lvl1(){
 
scene = createSprite(680,300,0,0,);
scene.addImage(sceneimg);
scene.scale=1.1

scene = createSprite(-800,300,0,0,);
scene.addImage(sceneimg);
scene.scale=1.1

scene = createSprite(2080,300,0,0,);
scene.addImage(sceneimg);
scene.scale=1.1

scene = createSprite(3280,300,0,0,);
scene.addImage(sceneimg);
scene.scale=1.1

scene = createSprite(4480,300,0,0,);
scene.addImage(sceneimg);
scene.scale=1.1

block1 = createSprite(430,555 );
block1.addImage(blockimg);

block2 = createSprite(1300,490);
block2.addImage(blockimg);
block2.scale=0.6;



block3 = createSprite(1800,430);
block3.addImage(blockimg);
block3.scale=1.3


block4 = createSprite(2700,480);
block4.addImage(blockimg);
block4.scale=0.4


block5 = createSprite(4400,480);
block5.addImage(blockimg);
block5.scale=1

block6= createSprite(1300,360);
block6.addImage(blockimg);
block6.scale=0.2;

block7= createSprite(2300,360);
block7.addImage(blockimg);
block7.scale=0.2;


player = createSprite(270,400,1,1);

player.addImage(playerimg)
player.scale=0.24;



wasp.addImage(waspimg);
wasp.scale=0.15;
if(keyDown("W")){
wasp.velocityX=-4;
}

console.log("Level")
}


