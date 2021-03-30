class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("images/Walking Frame/walking_1.png");
        this.btImage = loadImage("Bestman-01.png");
        
        
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+30,300,300);
        if(frameCount>=480){
        image(this.btImage , pos.x , pos.y+50 , 200 , 300);
        }
    }
}