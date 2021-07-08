class Paper{
    constructor(x,y){

    var options ={
        isStatic: false,
        'restitution': 0.3,
        'friction': 0,
        'density': 1.2
    }

    this.x = x;
    this.y = y;
    this.r = 40;
    this.image=loadImage("paper.png");
    this.body = Bodies.circle(this.x,this.y,40,options);
    World.add(world,this.body);

    }
    display()
	{       this.angle = 60;
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			ellipse(0,0,this.r);
            imageMode(CENTER);
			image(this.image, 0,0,50,50);
			pop()
	}

    
}