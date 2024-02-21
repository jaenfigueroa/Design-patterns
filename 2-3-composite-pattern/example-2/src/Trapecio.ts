import { Figura } from './main';

class Trapecio implements Figura {
  private baseMayor: number;
  private baseMenor: number;
  private altura: number;

  constructor(baseMayor: number, baseMenor: number, altura: number) {
    this.baseMayor = baseMayor;
    this.baseMenor = baseMenor;
    this.altura = altura;
  }

  area(): number {
    return ((this.baseMayor + this.baseMenor) * this.altura) / 2;
  }

  perimetro(): number {
    return this.baseMayor + this.baseMenor + 2 * this.altura;
  }
}

export default Trapecio;