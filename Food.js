class Food{
    constructor(){
        this.image=loadImage("milk.png");
        this.foodStock=foodStock;
        this.lastFed;

getFoodStock() ;{
        /*var FoodRef  = database.ref('Food');
    FoodRef.on("value",function(data){
       foodStock = data.val();*/
       return this.foodStock
}
updateFoodStock(foodStock) ;{
    this.foodStock=foodStock
    }

deductFood() ;{
    if(this.foodStock>0){
        this.foodStock=this.foodStock-1
        
      }
    }

    getFedTime(lastFed);{
        this.lastFed=this.lastFed
    }

    }
    display(){
        var x=80,y=100
        imageMode (CENTER)
        image(this.image,720,220,70,70)
        if (this.foodStock!=0) {
            for (var i =0 ;i <this.foodStock;i++){
                if (i%10==0) {
                    x=80
                    y=y+50
                } 
                image(this.image,x,y,50,50)
                x=x+30          
            }
        }
    }
}