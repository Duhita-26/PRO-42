var back_img;
var iss_img;
var spaceCrf1_img, spaceCrf2_img, spaceCrf3_img, spaceCrf4_img;
var iss;
var spaceCraft;
var hasDocked = false;

function preload(){
  back_img = loadImage("images/spacebg.jpg");
  iss_img = loadImage("images/iss.png");
  spaceCrf1_img = loadImage("images/spacecraft1.png");
  spaceCrf2_img = loadImage("images/spacecraft2.png");
  spaceCrf3_img = loadImage("images/spacecraft3.png");
  spaceCrf4_img = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(330, 130, 50, 50);
  iss.addImage(iss_img);
  iss.scale = 0.8;

  spaceCraft = createSprite(285, 240, 50, 50);
  spaceCraft.addImage(spaceCrf1_img);
  spaceCraft.scale = 0.15;
}

function draw() {
  background(back_img);  
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x+random(-1, 1);
    if(keyDown("RIGHT_ARROW")){
      spaceCraft.x = spaceCraft.x+1
      spaceCraft.addImage(spaceCrf3_img)
    }
    if(keyDown("LEFT_ARROW")){
      spaceCraft.x = spaceCraft.x-1
      spaceCraft.addImage(spaceCrf4_img)
    }
    if(keyDown("UP_ARROW")){
      spaceCraft.y = spaceCraft.y-2
    }
    if(keyDown("DOWN_ARROW")){
      spaceCraft.addImage(spaceCrf2_img)
    }
  }

  if(spaceCraft.y<=(iss.y+70)&&spaceCraft.x<=(iss.x-10)){
    hasDocked=true;
    textSize(30);
    fill("WHITE");
    text("DOCKING SUCCESSFUL!!", 200, 300) 
  }
  drawSprites();
}