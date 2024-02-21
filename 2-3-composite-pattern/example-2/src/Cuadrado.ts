import { Figura } from './main';

class Cuadradro implements Figura {
  private lado: number;

  constructor(lado: number) {
    this.lado = lado;
  }

  area(): number {
    return Math.pow(this.lado, 2);
  }

  perimetro(): number {
    return this.lado * 4;
  }
}

export default Cuadradro;