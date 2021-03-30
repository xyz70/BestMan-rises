//const
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
//thunder
var thunder;
var thunder1;
var thunder2;
var thunder3; 
var thunder4;
var thunderFrame=0;
//bat
var batAnimation,bat;

//drops
var maxDrops=700;
var drops=[];

var ground , groundImage;
function preload(){
   
    thunder1=loadImage("images/thunderbolt/1.png");
    thunder2=loadImage("images/thunderbolt/2.png");
    thunder3=loadImage("images/thunderbolt/3.png");
    thunder4=loadImage("images/thunderbolt/4.png");
    batAnimation = loadAnimation("bat1.png","bat2.png","bat3.png",
                        "bat4.png","bat5.png","bat6.png",
                        "bat7.png","bat8.png","bat9.png",
                        "bat10.png","bat11.png","bat12.png");
    groundImage = loadImage("ground.jpg");
    
}

function setup(){
createCanvas(1340,650);

ground = createSprite(700, 1440, 0, 0);
ground.addImage(groundImage);
ground.scale = 4;

engine = Engine.create();
world = engine.world;   

umbrella=new Umbrella(100,450);

if(frameCount%150===0){
for(var i=0; i<maxDrops; i++){
drops.push(new Drop(random(0,1600),random(0,1600)))
}
}

}

function draw(){
    Engine.update(engine);
    background("black");

var rand=Math.round(random(1,4));
if(frameCount%50==0){
thunderFrame=frameCount;
thunder=createSprite(random(10,1670),random(10,30),10,10);
switch(rand){
case 1:thunder.addImage(thunder1);
break;
case 2:thunder.addImage(thunder2);
break;
case 3:thunder.addImage(thunder3);
break;
case 4:thunder.addImage(thunder4);
break;
default:break;
}
thunder.scale=random(0.3,0.6);
}
if(thunderFrame+10===frameCount && thunder){
thunder.destroy();
}
bat= createSprite(Math.round(random(100,400)),Math.round(random(100,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 350 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        
       
    }

for(var i=0; i<maxDrops; i++){
drops[i].showDrop();
drops[i].update();
}
umbrella.display();
drawSprites();

}   

