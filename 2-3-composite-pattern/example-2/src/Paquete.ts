import { Figura } from "./main";

class Paquete implements Figura {
  private figuras: Figura[] = [];

  add(figura: Figura) {
    this.figuras.push(figura);
  }

  area(): number {
    return this.figuras.reduce((acc, figura) => acc + figura.area(), 0);
  }

  perimetro(): number {
    return this.figuras.reduce((acc, figura) => acc + figura.perimetro(), 0);
  }
}

export default Paquete;