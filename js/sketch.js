let width = screen.width, height = screen.height;
let center = [width/2, height/2];
let grafo;

function setup() {
	createCanvas(width, height);
	grafo = new Grafo();
	textSize(16);
	textAlign(CENTER, CENTER);
}

function draw() {
	background(0);
	grafo.run();
}

function mousePressed() {
	fullscreen(true);
	grafo.clicked();
}

function keyTyped() {
	fullscreen(true);
	grafo.newVertice(key);
}

function keyPressed() {
	switch(keyCode) {
		case ENTER:
			console.log(grafo);
			break;
		case UP_ARROW:
			grafo.setVel([0,-1]);
			break;
		case LEFT_ARROW:
			grafo.setVel([-1,0]);
			break;
		case DOWN_ARROW:
			grafo.setVel([0,1]);
			break;
		case RIGHT_ARROW:
			grafo.setVel([1,0]);
			break;
	}
}