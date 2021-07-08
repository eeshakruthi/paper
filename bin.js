class Bin {
    constructor(x,y)   {
        this.x=x;
        this.y=y;
        this.dustbinWidth=200;
        this.dustbinHeight=213;
        this.wallThickness=20;
        
    this.image=loadImage("dustbingreen.png");
    this.leftbody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
this.rightbody = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
World.add(world,this.leftbody);
World.add(world,this.rightbody);
World.add(world,this.bottomBody);

}
display()   {
    push ()

    var posBottom=this.bottomBody.position;
			var posLeft=this.leftbody.position;
			var posRight=this.rightbody.position;

            translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
      pop ()
    
    }
};
