var backgroundS,backgroundImage,zombieImage,spaceImg;

var alienImg;

var player;

var zombie , zombie2 , zombie3;

var edge1 , edge2 , edge3 , edge4;

var cr , cr2 , cr3 , cr4;

var bullet , bulletGroup;

var alien, alien2 , alien3 , alien4;

var score = 0;

var score1 = 0;

var deathCount = 0;

var gameState = "Start";

function preload(){
  backgroundImage = loadImage("backgroundIMAGE.jpg");
  playerImage = loadImage("playerIMG-unscreen.gif");
  zombieImage = loadImage("ZOMBIE.png");
  spaceImg = loadImage("space.png");
  alienImg = loadImage("alien.gif");
  bulletImage = loadImage("bullet.png");

}


function setup(){
  canvas = createCanvas(900,900);

  backgroundS = createSprite(600,600,1200,1200);
  backgroundS.addImage("bk",backgroundImage);
  backgroundS.addImage("sp",spaceImg);
  backgroundS.scale = 2.5;
  
  player = createSprite(600,1000,10,10);
  player.addImage("pl",playerImage);
  player.debug = true;
  player.setCollider("rectangle",0,0,50,50);

  zombie = createSprite(900,700,10,10);
  zombie.addImage("zm",zombieImage);
  zombie.scale = 0.5;
  zombie.debug = true;
  zombie.setCollider("circle", 0 ,0 , 700 );

  zombie2 = createSprite(10,700,10,10);
  zombie2.addImage("zb",zombieImage);
  zombie2.scale = 0.5;
  zombie2.debug = true;
  zombie2.setCollider("circle",0 , 0, 700);

  zombie3 = createSprite(900,100,10,10);
  zombie3.addImage("Z",zombieImage);
  zombie3.scale = 0.5;
  zombie3.debug = true;
  zombie3.setCollider(("circle"), 0 , 0, 700);

  edge1 = createSprite(450,-800,2000,20);

  edge2 = createSprite(450,2000,2000,20);

  edge3 = createSprite(-1800,500,20,2500);

  edge4 = createSprite(3000,500,20,2500);

  cr = createSprite(350,800,50,600);

  cr2 = createSprite(750,800,50,600);

 alien = createSprite(300,300,150,150);
 alien.visible = false;
 alien.velocityX = -7;
 alien.velocityY =  3;

 alien2 = createSprite(800,1300,70,80);
 alien2.visible = false;
 alien2.velocityX = -7;
 alien2.velocityY =  3;

 alien3 = createSprite(900,1000,50,100);
 alien3.visible = false;

 alien4 = createSprite(800,1200,20,30);
 alien4.visible = false;
 alien4.velocityX = -7 ;
 alien4.velocityY =  9;

  bulletGroup = new Group(bullet);

  alien4.debug = true;
  alien3.debug = true;

}

function draw(){
   
  camera.x = player.x;
  camera.y = player.y;

  if(keyDown(UP_ARROW)){
    player.y = player.y -10;
  }
  
  if(keyDown(DOWN_ARROW)){
    player.y = player.y +10;
  }

  if(keyDown(LEFT_ARROW)){
    player.x = player.x -10; 
  }

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x +10;
  }

  if(keyDown("space")){
    bullet = createSprite(player.x , player.y ,10,5);
    bullet.velocityX = 0;
    bullet.velocityY = -4;
    bullet.addImage("bl",bulletImage);
    bullet.scale = 0.05;
    bulletGroup.add(bullet);
  }

  if(player.collide(zombie)){
    zombie.velocityX = -3;
    zombie.velocityY = random(-2,2);
    zombie.setCollider("circle",0,0,100);
  }

  if(player.collide(zombie2)){
    zombie2.velocityX = -3;
    zombie2.velocityY = random(-2,2);
    zombie2.setCollider("circle",0,0,100);
  }

  if(player.collide(zombie3)){
    zombie3.velocityX = -3;
    zombie3.velocityY = random(-2,2);
    zombie3.setCollider("circle",0,0,100);
  }

  if(bulletGroup.isTouching(zombie)){
    zombie.destroy();
    score = score+10;
    deathCount = deathCount+1;
  }
 
  if(bulletGroup.isTouching(zombie2)){
    zombie2.destroy();
    score = score+10;
    deathCount = deathCount+1;
  }

  if(bulletGroup.isTouching(zombie3)){
    zombie3.destroy();
    score = score+10;
    deathCount = deathCount+1;
  }


  drawSprites();
  if(gameState == "Start"){
  text("SCORE : "+ score , player.x+ 200,player.y-200);
  }
  text("DEATH COUNT : " + deathCount,player.x+200,player.y-180);

  text(mouseX+","+mouseY,mouseX,mouseY);

  if(score == 10 && deathCount == 1 && gameState == "Start"){
    gameState = "Play";
  }

  if( gameState == "Play"){
    
    alien.addImage("al",alienImg);
    alien.visible = true;
    
    alien2.addImage("ai",alienImg);
    //alien2.velocityX =  8;
    //alien2.velocityY =  7;
    alien2.visible = true;
   
    alien3.addImage("ao",alienImg);
    alien3.velocityX =  9;
    alien3.velocityY = 7;
    alien3.visible = true;

    alien4.addImage("ab",alienImg);
    alien4.visible = true;

    backgroundS.changeImage("sp",spaceImg);
    backgroundS.scale = 2.5;
    cr.visible = false;
    cr2.visible = false;

    text("SCORE : "+ score1 , player.x+ 200,player.y-200);

    box1s1 = createSprite(-200 , 300 , 20 , 400);
    box1s2 = createSprite(100 , 100 , 700 , 20 );
    box1s3 = createSprite(440,370,22,600);
    box1s4 = createSprite(100,500,600,22);

    box2s1 = createSprite(900 , 850 , 700 , 20);
    box2s2 = createSprite(600 , 1100 , 20 , 550 );
    box2s3 = createSprite(1200 , 1100 , 20 , 550);
    box2s4 = createSprite(900 , 1350, 700 , 20);

    if(frameCount % 100 == 0){
      bullet1 = createSprite(alien.x,alien.y,10,20);
      bullet1.velocityY = random(-5 , 5);
      bullet1.velocityX = random(-6 , 6);
    }
    if(frameCount % 120 == 0){
      bullet2 = createSprite(alien2.x , alien2,5,15);
      bullet2.velocityX = random(-9 ,  9);
      bullet2.velocityY = random(-7 , 7);
    }

    if(frameCount % 150 == 0){
      bullet3 = createSprite(alien3.x , alien3.y , 5,15);
      bullet3.velocityX = random(-10 , 10);
      bullet3.velocityY = random(-6 , 6);
    }

    if(frameCount % 200 == 0){
      bullet4 = createSprite(alien4.x , alien4.y , 5 , 15);
      bullet4.velocityX = random(-8 , 8);
      bullet4.velocityY = random(-7 , 7);
    }

    if(bulletGroup.isTouching(alien)){
      alien.destroy();
      bulletGroup.destroyEach();
      score1 = score1+5;
    }

    if(bulletGroup.isTouching(alien2)){
      alien2.destroy();
      bulletGroup.destroyEach();
      score1 = score1+5;
    }

    if(bulletGroup.isTouching(alien3)){
      alien3.destroy();
      bulletGroup.destroyEach();
      score1 = score1+5;
    }

    if(bulletGroup.isTouching(alien4)){
      alien4.destroy();
      bulletGroup.destroyEach();
      score1 = score1+5;
    }

    alien.bounceOff(box1s1);
    alien.bounceOff(box1s2);
    alien.bounceOff(box1s3);
    alien.bounceOff(box1s4);

    alien4.bounceOff(box2s1);
    alien4.bounceOff(box2s2);
    alien4.bounceOff(box2s3);
    alien4.bounceOff(box2s4);

  }
  //zombie.bounceOff(edges);

 // zombie2.bounceOff(edges);
  
  //zombie3.bounceOff(edges);

  player.bounceOff(edge2);

  player.bounceOff(edge1);

  player.bounceOff(edge3);

  player.bounceOff(edge4);

}

