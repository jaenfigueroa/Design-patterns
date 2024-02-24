// ⭐

class Particula {
  color: string; // 1KB
  sprite: string; // 20KB

  constructor(color: string, sprite: string) {
    this.color = color;
    this.sprite = sprite;
  }

  mover(noodenadas: number[], vector: number[], velocidad: number) {
    // Aqui va la logica para mover la particula
  }
  dibujar(coordenadas: number[], canvas: unknown) {
    // Aqui va la logica para dibujar la particula
  }
}

class ParticulaEnMovimiento {
  particula: Particula; // 4KB (referencia)

  coordenadas: number[]; // 8B
  vector: number[]; // 16B
  velocidad: number; // 4B

  constructor(particula: Particula, coordenadas: number[], vector: number[], velocidad: number) {
    this.particula = particula;

    this.coordenadas = coordenadas;
    this.vector = vector;
    this.velocidad = velocidad;
  }

  mover() {
    this.particula.mover(this.coordenadas, this.vector, this.velocidad);
  }
  dibujar(canvas: unknown) {
    this.particula.dibujar(this.coordenadas, canvas);
  }
}

// -----------------------------------------------------------------------------------------------------

// UN POCO DE EXPLICACION

// La particula es el objeto mas grande, pero solo se crea una vez y se referencia
const particula = new Particula('rojo', 'sprite1.jpg'); // 21 KB

// La particula en movimiento es el objeto mas pequeño, se crea muchas veces y cuesta menos RAM
const particulaEnMovimiento_1 = new ParticulaEnMovimiento(particula, [0, 0], [1, 1], 10); // 32 B
const particulaEnMovimiento_2 = new ParticulaEnMovimiento(particula, [0, 0], [1, 1], 10); // 32 B
const particulaEnMovimiento_3 = new ParticulaEnMovimiento(particula, [0, 0], [1, 1], 10); // 32 B
const particulaEnMovimiento_4 = new ParticulaEnMovimiento(particula, [0, 0], [1, 1], 10); // 32 B
const particulaEnMovimiento_5 = new ParticulaEnMovimiento(particula, [0, 0], [1, 1], 10); // 32 B

/*
  El mas grande es la particula, pero solo se crea una vez y se referencia
  El mas pequeño es la particulaEnMovimiento, que solo tiene 32B , cuesta menos RAM al ser creado muchas veces
*/

// -----------------------------------------------------------------------------------------------------

// CODIGO CLIENTE

class Game {
  pasticulasEnMovimiento: ParticulaEnMovimiento[] = [];
  particulas: Particula[] = [];

  addParticulaEnMovimiento(coordenadas: number[], vector: number[], velocidad: number, color: string, sprite: string) {

    // Buscar si ya existe una particula con el mismo color y sprite
    let particula = this.particulas.find(p => p.color === color && p.sprite === sprite);

    // Si no existe, crear una nueva
    if (!particula) {
      particula = new Particula(color, sprite);

      this.particulas.push(particula);

    }

    // Crear una nueva particula en movimiento
    this.pasticulasEnMovimiento.push(new ParticulaEnMovimiento(particula, coordenadas, vector, velocidad));
  }

  dibujar(canvas: unknown) {
    this.pasticulasEnMovimiento.forEach(p => p.dibujar(canvas));
  }
}

const game = new Game();

// mas codigo cliente

class Unit{
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  hayColision() {
    game.addParticulaEnMovimiento([0, 0], [1, 1], 10, 'rojo', 'sprite1.jpg');
  }
}

const unit = new Unit(game);
unit.hayColision();

// -----------------------------------------------------------------------------------------------------

