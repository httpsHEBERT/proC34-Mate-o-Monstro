class Hero {

	constructor(x, y, r){

		var options = { 
			'density': 1, 
			'frictionAir': 1
		}

		this.x = x, this.y = y, this.r = r;
		this.image = loadImage("Images/hero.png");
		this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);
  	}
	
	display(){
			
		var pos = this.body.position;

		push()
			translate(pos.x, pos.y-100);
			rectMode(CENTER);
			fill(255,0,255);
			imageMode(CENTER);
			image(this.image, 0, 0, this.r+150, this.r);
		pop()
	}
}
