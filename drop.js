class Drop{
	  constructor(x,y){
		    var options={
				friction:0.001,
				restitution:0.1,
				isStatic:false
            		
			}
			this.r=3;
			this.body=Bodies.circle(x, y, 3, options)
			World.add(world, this.body);
			}

			showDrop(){   
			fill("darkblue");
			ellipseMode(RADIUS)
			ellipse(this.body.position.x,this.body.position.y,this.r, this.r)
			}

	  update(){
            if(this.body.position.y>height){
				Matter.Body.setPosition(this.body,{x:random(0,1600),y:random(0,1600)});
			}
	  }

}
