//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;
var fedTime, lastFed;
var feed, addFood;
var foodObj;

function preload()
{
  //load images here
  dogimg = loadImage("dogImg.png");
  happyDogimg = loadImage("dogImg1.png");
  //milkBottleimage = loadImage("Milk.png")
}

function setup() {
  createCanvas(800, 500);

  database=firebase.database();
    foodStock=database.ref('Food');
    foodStock.on("value",readStock);

  dog=createSprite(250, 290, 10,10);
  dog.addImage(dogimg);
  dog.scale=0.2;

  feed=createButton("Feed the dog");
  feed.position(100,500);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food")
  addFood.position(700,500);
  addFood.mousePressed(addFood);
}

function draw() {  
  background(46, 139, 87);

    fedTime=database.ref('FeedTime');
    fedTime.on("value",function (data){
      lastFed=data.val();
    })

   // foodObj.display();
    
    textSize(14);
    fill("white");
    text("Food remaining:"+foodS,250,170);

   drawSprites();  
}


//funtion to updatefood stock and last fedtime
  function feedDog(){
    dog.addImage(happyDogimg);
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
    database.ref('/').update({
      Food:foodObj.getFoodStock(),
      FeedTime:hour()
    })
  }
  //function to add food in stock
function addFood(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}

function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


  //add styles here
 
 // text("Note:press UP_ARROW key to feed Drago milk!",100,440);
