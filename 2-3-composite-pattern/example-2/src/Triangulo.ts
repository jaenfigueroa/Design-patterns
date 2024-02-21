import { Figura } from "./main";

class Triangulo implements Figura {
  private base: number;
  private altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }

  area(): number {
    return (this.base * this.altura) / 2;
  }

  perimetro(): number {
    return this.base * 3;
  }
}

export default Triangulo;