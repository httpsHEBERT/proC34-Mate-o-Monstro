class Monster {

  	constructor(x, y, width, height){

		var options = { 
			'density': 5, 
			'frictionAir': 0
		}

		this.body = Bodies.rectangle(x, y, width, height, options);
		this.width = width, this.height = height;
		this.image = loadImage("Images/monster.png");
		World.add(world, this.body);
	}

	display() {
			
		var pos = this.body.position;

		push()
			translate(pos.x, pos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0, 140, this.width, this.height)
		pop()
	}
}
