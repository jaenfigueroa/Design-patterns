interface Forma {
  // x: number;
  // y: number;
  color: string;

  clonar(): Forma;
}

// --------------------------------------------------------------------------

class Rectangulo implements Forma {
  color: string;
  ancho: number;
  alto: number;

  constructor(ancho: number, alto: number, color: string) {
    this.ancho = ancho;
    this.alto = alto;
    this.color = color;
  }

  clonar(): Forma {
    return new Rectangulo(this.ancho, this.alto, this.color);
  }
}

class Circulo implements Forma {
  color: string;
  radio: number;

  constructor(radio: number, color: string) {
    this.radio = radio;
    this.color = color;
  }

  clonar(): Forma {
    return new Circulo(this.radio, this.color);
  }
}
// --------------------------------------------------------------------------
