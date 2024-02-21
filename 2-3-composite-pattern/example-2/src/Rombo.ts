import { Figura } from "./main";

class Rombo implements Figura {
  private diagonalVertical: number
  private diagonalHorizontal: number

  constructor(diagonalVertical: number, diagonalHorizontal: number) {
    this.diagonalVertical = diagonalVertical
    this.diagonalHorizontal = diagonalHorizontal
  }

  area(): number {
    return (this.diagonalVertical * this.diagonalHorizontal) / 2;
  }

  perimetro(): number {
    return 4 * Math.sqrt(Math.pow(this.diagonalVertical / 2, 2) + Math.pow(this.diagonalHorizontal / 2, 2));
  }
}

export default Rombo;