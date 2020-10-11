var dog,happyDog;
var database;
var foodS,foodStock,lastFed,foodObj;
function preload()
{
dogimg = loadImage("Dog.png");
happyDog = loadImage("happydog.png");
}

function setup() {
  database=firebase.database();
  console.log(database)
	createCanvas(500, 500);
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
  dog=createSprite(250,300,150,150);
  dog.addImage(dogimg);
  dog.scale=0.25
  feed=createButton("Feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods);
}


function draw() {  
  background(46,139,87)

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  fill(255,255,254)
  textSize(15)
  if (lastFed>=12) {
    text("Last Feed :" + lastFed%12 + "PM", 350,30)
  }else{
    text("Last Feed :" + lastFed + "AM",350,30)
  }

  drawSprites();

}

function readStock(data) {
  foodS=data.val();
  foodObj.updateFoodStock(foodS)
}

function writeStock(x) {

  if (x<=0) {
    x=0;
  } else {
    x=x-1;
  }

  database.ref('/').update({
    Food:foodStock,
    Food:x
  })
}

function feedDog() {
  dog.addImage(happyDog)

  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

function addFoods() {
  foodS++
  database.ref('/').update({
    Food:foodS
  })
}