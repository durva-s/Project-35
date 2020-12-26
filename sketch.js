//Create variables here
var dog, dog1, happyDog,database,foodS,foodStock;

function preload()
{
  //load images here
  happyDog = loadImage("images/dogImg.png");
  dog1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite();
  dog.addImage(dog1)
  database = database.firebase();
  foodStock = database.ref('food')
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  
  drawSprites();
  //add styles here
textSize(25);
fill("black")
text("Press the up arrow to feed draggo his milk !",20,450);
}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
  Food:x
})
}



