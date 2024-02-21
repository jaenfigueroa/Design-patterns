/**
 * PiezaRedonda define la interfaz específica utilizada por el código cliente.
 */
class PiezaRedonda {

  public getRadio(): number {
    return 5;
  }
}

/**
* La PiezaCuadrada contiene algún comportamiento útil, pero su interfaz es incompatible
* con el código cliente existente. La PiezaCuadrada necesita alguna adaptación antes de que el
* código cliente pueda utilizarlo.
*/
class PiezaCuadrada {
  public getLado(): number {
    return 10;
  }
}

// ---------------------------------------------------------------------------------------------

/**
* El Adaptador hace que la interfaz PiezaCuadrada sea compatible con la interfaz PiezaRedonda
*/
class Adaptador extends PiezaRedonda {
  private piezaSinAdaptar: PiezaCuadrada;

  constructor(piezaSinAdaptar: PiezaCuadrada) {
    super();
    this.piezaSinAdaptar = piezaSinAdaptar;
  }

  public getRadio(): number {
    const ladoCuadrado = this.piezaSinAdaptar.getLado();
    const diagonalCuadrado = ladoCuadrado * Math.sqrt(2);

    const radio = diagonalCuadrado / 2;
    return radio;
  }
}

// ---------------------------------------------------------------------------------------------

/**
* El código cliente soporta todas las clases que siguen la interfaz del Destino.
*/
function codigoCliente(objetivo: PiezaRedonda) {
  return objetivo.getRadio();
}

//  Puedo trabajar perfectamente con objetos Destino:
const eeuu = new PiezaRedonda();
const resultado_1 = codigoCliente(eeuu);
console.log(resultado_1);

// pero no puedo trabajar con objetos SinAdaptar
const juan = new PiezaCuadrada();
// const resultado_2 = codigoCliente(juan); // 'SinAdaptar' no es asignable a 'Destino'
// console.log(resultado_2);

// Pero puedo trabajar con objetos Adaptador
const adaptado = new Adaptador(juan);
const resultado_3 = codigoCliente(adaptado);
console.log(resultado_3);
