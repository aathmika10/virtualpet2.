class Food {
    constructor(){
       this.foodStock==0,
       this.lastFed;
       this.milkbottleimage=loadImage("Milk.png")
    }
   

   display(){
     var x= 80, y=100;
     imageMode(CENTER);
    image=addImage(this.milkbottleimage,720,220,70,70);
     if(this.foodStock!=0){
      for( var i=0;1<this.foodStock; i++){
      if (i%10==0){
      x=80;
      y=y+50;
       }
      image(this.milkbottleimage,x,y,50,50);
       x=x+30;
        }
       }
     }

     updateFoodStock(data){
    foodS=data.val();
    }
  
    getFedTime(x){
      if(x<=0){
        x=0;
      }
      else{
        x=x-1;
      }
      
      database.ref('/').update({
        food:x
      })
    }
   // (foodStock){
   //   this.foodStock = foodStock;
    //}
  //  getFedTime(lastFed){
  //    this.lastFed = lastFed
    //}
}