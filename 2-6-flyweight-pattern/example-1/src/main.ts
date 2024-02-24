// ANTES
class Particula {
  coordenadas: number[]; // 8B
  vector: number[]; // 16B
  velocidad: number; //4B
  color: string; // 1KB
  sprite: string; //20KB

  mover() { }
  dibujar() { }
}

/*
ANTES: COSTE DE MEMORIA POR 1 MILLON DE PARTICULAS:

  Particula = 8B + 16B + 4B + 1KB + 20KB = 21 KB

  Particula = 21 KB * 1 000 000 = 21 GB (si se crean 1 millon de particulas)

  PesoTotal = 21 GB <-- 1 millon de particulas
*/

// ------------------------------------------------------------------------------------------

// DESPUES

/*
El patrón Flyweight sugiere que dejemos de almacenar el estado extrínseco (que cambia) dentro del objeto.
En lugar de eso, debes pasar este estado a métodos específicos que dependen de él.
Tan solo el estado intrínseco (que no cambia) se mantiene dentro del objeto, permitiendo que lo
reutilices en distintos contextos

Como resultado, necesitarás menos de estos objetos, ya que sólo se diferencian en el estado intrínseco,
que cuenta con muchas menos variaciones que el extrínseco.
*/

// 1. Creamos una clase para el estado intrínseco (que no cambia)
// solo se crea una vez y se referencia
class Particula {
  // coordenadas: number[]; // 8B <-- se retira
  // vector: number[]; // 16B <-- se retira
  // velocidad: number; //4B <-- se retira

  color: string; // 1KB
  sprite: string; //20KB

  constructor(color: string, sprite: string) {
    this.color = color;
    this.sprite = sprite;
  }

  mover(noodenadas: number[], vector: number, velocidad: number) {}
  dibujar(coordenadas: number[], canvas: unknown) {}
}

// 2. Creamos una clase para el estado extrínseco (que cambia)
// se crea cada vez que se necesite una nueva particula en distinto lugar
class ParticulaEnMovimiento {
  particula: Particula; // 21KB (4B nomas ya que esto se referencia, no se vuelve a crear) <-- se ha agregado

  coordenadas: number[]; // 8B <- ponemos aqui
  vector: number[]; // 16B <- ponemos aqui
  velocidad: number; //4B <- ponemos aqui

  constructor(particula: Particula,/* ... */ ) {
    this.particula = particula;

    /* ... */
  }

  mover() {
    this.particula.mover(this.coordenadas, this.vector, this.velocidad);
  }
  dibujar() {
    this.particula.dibujar(this.coordenadas, canvas);
  }
}


/*
DESPUES: COSTE DE MEMORIA POR 1 MILLON DE PARTICULAS:

  Particula = 21 KB
  ParticulaEnMovimiento = 32 B

  ParticulaEnMovimiento = 32 B * 1 000 000 = 32 MB (si se crean 1 millon de particulas en movimiento)

  pesoTotal = 21KB + 32 MB  = 32 MB <-- 1 millon de particulas
*/
