
// Digamos que tienes dos clases con interfaces compatibles:
// RedondoAgujero y RedondoPieza

class RedondoAgujero {
  private radio: number;
  
  constructor(radio: number) {
    this.radio = radio;
  }
  
  public getRadio(): number {
    return this.radio;
  }

  public seAdaptaA(pieza: RedondoPieza): boolean {
    return this.getRadio() >= pieza.getRadio();
  }
}
// -------------------------------------------------------------------------------

class RedondoPieza {
  private radio: number;
  
  constructor(radio: number) {
    this.radio = radio;
  }
  
  public getRadio(): number { // Devuelve el radio de la pieza.
    return this.radio;
  }
}

// Pero hay una clase incompatible: SquarePeg (PiezaCuadrada). No puedes simplemente
// insertar una pieza cuadrada en un agujero redondo sin alguna forma de adaptación.
class CuadradoPieza {
  private lado: number;
  
  constructor(lado: number) {
    this.lado = lado;
  }
  
  public getLado(): number { // devuelve el lado del cuadrado
    return this.lado;
  }
}

// -------------------------------------------------------------------------------
// Una clase adaptadora te permite encajar piezas cuadradas en
// agujeros redondos. Extiende la clase RedondoPieza (pieza redonda) para permitir a
// los objetos adaptadores actuar como piezas redondas.

class CuadradoPiezaAdaptador extends RedondoPieza{
  private pieza: CuadradoPieza;

  constructor(pieza: CuadradoPieza) {
    const ladoCuadrado = pieza.getLado();
    const diagonalCuadrado = ladoCuadrado * Math.sqrt(2);
    const radio = diagonalCuadrado / 2;

    super(radio);
    this.pieza = pieza;
  }

  public getRadio(): number {
    // const ladoCuadrado = this.pieza.getLado();
    // const diagonalCuadrado = ladoCuadrado * Math.sqrt(2);

    // const radio = diagonalCuadrado / 2;
    // return radio;

    return super.getRadio();
  }
}

// -------------------------------------------------------------------------------

const clientCode = () => {
  const redondoAgujero = new RedondoAgujero(5);

  const redondoPieza = new RedondoPieza(5);
  const cuadradoPieza = new CuadradoPieza(5);

  // 1. probamos con un agujero redondo y pieza redonda 
  console.log(redondoAgujero.seAdaptaA(redondoPieza)); // true

  // 2. probamos con un agujero redondo y pieza cuadrada
  // console.log(redondoAgujero.setAdaptaA(cuadradoPieza)); // 'CuadradoPieza' no es asignable, se espera 'RedondoPieza'

  // 3. Ahora usamos el adaptador para que la pieza cuadrada se adapte al agujero redondo
  const cuadradoAdaptado = new CuadradoPiezaAdaptador(cuadradoPieza);

  console.log(redondoAgujero.seAdaptaA(cuadradoAdaptado)); // true
}