/**
 * El Objetivo define la interfaz específica del dominio utilizada por el código cliente.
 */
class Destino {
  public request(): string {
    return 'Destino: texto-normal.';
  }
}

/**
* El Adaptee contiene algún comportamiento útil, pero su interfaz es incompatible
* con el código cliente existente. El Adaptee necesita alguna adaptación antes de que el
* código cliente pueda utilizarlo.
*/
class SinAdaptar {
  public specificRequest(): string {
    return 'lamron-otxet';
  }
}

// ---------------------------------------------------------------------------------------------

/**
* El Adaptador hace que la interfaz del Adaptee sea compatible con la interfaz del Objetivo.
*/
class Adaptador extends Destino {
  private adaptado: SinAdaptar;

  constructor(adaptado: SinAdaptar) {
    super();
    this.adaptado = adaptado;
  }

  public request(): string {
    const result = this.adaptado.specificRequest().split('').reverse().join('');
    return `Adaptador: (TRADUCIDO) ${result}`;
  }
}

// ---------------------------------------------------------------------------------------------

/**
* El código cliente soporta todas las clases que siguen la interfaz del Destino.
*/
function codigoCliente(objetivo: Destino) {
  return objetivo.request();
}

//  Puedo trabajar perfectamente con objetos Destino:
const eeuu = new Destino();
const resultado_1 = codigoCliente(eeuu);
console.log(resultado_1);

// pero no puedo trabajar con objetos SinAdaptar
const juan = new SinAdaptar();
// const resultado_2 = codigoCliente(juan); // 'SinAdaptar' no es asignable a 'Destino'
// console.log(resultado_2);

// Pero puedo trabajar con objetos Adaptador
const adaptado = new Adaptador(juan);
const resultado_3 = codigoCliente(adaptado);
console.log(resultado_3);
