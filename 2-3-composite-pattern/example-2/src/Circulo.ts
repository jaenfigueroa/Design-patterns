import { Figura } from "./main";

class Circulo implements Figura {
  private radio: number;

  constructor(radio: number) {
    this.radio = radio;
  }

  area(): number {
    return Math.PI * Math.pow(this.radio, 2);
  }

  perimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}

export default Circulo;