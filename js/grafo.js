class Grafo {

	constructor() {
		this.ids = [];
		this.vertices = [];
		this.arestas = [];
	}

	newVertice(id = false) {
		if(inAlphabet(id) < 0 || this.ids.indexOf(id) > -1) return;
		this.ids.push(id);
		this.vertices.push(new Vertice(id, [random(width),random(height)]));
	}

	connect() {
		let sels = [];
		for(const vertice of this.vertices) {
			if(vertice.sel) sels.push(vertice);
		}
		if(sels.length === 2) {
			let connection = [sels[0], sels[1]];
			if(this.arestas.indexOf(connection) < 0) this.arestas.push(connection);
			sels[0].sel = false;
			sels[1].sel = false;
		}
	}

	setVel(vel) {
		for(const vertice of this.vertices) {
			if(vertice.sel){
				vertice.vel[0] += vel[0];
				vertice.vel[1] += vel[1];
			};
		}
	}

	render() {
		if(this.arestas.length  < 1) return;
		for(const aresta of this.arestas) {
			stroke('red');
			line(aresta[0].pos[0], aresta[0].pos[1], aresta[1].pos[0], aresta[1].pos[1]);
		}
	}

	clicked() {
		for(const vertice of this.vertices) {
			vertice.clicked();
		}
	}

	run() {
		this.render();
		for(const vertice of this.vertices) {
			this.connect();
			vertice.move();
			vertice.render();
		}
	}

}