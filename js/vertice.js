class Vertice {

	constructor(id, pos = center) {
		this.id = id;
		this.pos = pos;
		this.vel = [0,0];
		this.rad = 30;
		this.sel = false;
	}

	clicked() {
		if(dist(mouseX, mouseY, this.pos[0], this.pos[1]) < this.rad - 10) this.sel = !this.sel;
	}

	move() {
		if(this.pos[0] < 0 || this.pos[0] > width) this.vel[0] = -this.vel[0];
		if(this.pos[1] < 0 || this.pos[1] > height) this.vel[1] = -this.vel[1];
		this.pos[0] += this.vel[0];
		this.pos[1] += this.vel[1];
	}

	render() {
		fill((this.sel) ? 'white' : 'blue');
		circle(this.pos[0], this.pos[1], this.rad);
		fill((this.sel) ? 'blue' : 'white');
		text(this.id, this.pos[0],this.pos[1]);
	}
}