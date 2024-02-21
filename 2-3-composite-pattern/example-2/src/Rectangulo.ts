import { Figura } from "./main";

class Rectangulo implements Figura {
  private ancho: number;
  private alto: number;

  constructor(ancho: number, alto: number) {
    this.ancho = ancho;
    this.alto = alto;
  }

  area(): number {
    return this.ancho * this.alto;
  }

  perimetro(): number {
    return 2 * (this.ancho + this.alto);
  }
}

export default Rectangulo;