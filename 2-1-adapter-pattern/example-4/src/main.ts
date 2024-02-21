/**
 * "EstadoUnidense" define la interfaz específica utilizada por el código cliente.
 */
class EstadoUnidense {
  public saludarEnIngles(): string {
    return "ORIGINAL: Hello World";
  }
}

/**
* "Espanol" contiene algún comportamiento útil, pero su interfaz es incompatible
* con el código cliente existente. "Espanol" necesita alguna adaptación antes de que el
* código cliente pueda utilizarlo.
*/
class Espanol {
  public saludarEspañol(): string {
    return "Hola Mundo";
  }
}

// ---------------------------------------------------------------------------------------------

/**
* El Adaptador hace que la interfaz "Espanol" sea compatible con la interfaz "EstadoUnidense"
*/
class Adaptador extends EstadoUnidense {
  private sinAdaptar: Espanol;

  constructor(sinAdaptar: Espanol) {
    super();
    this.sinAdaptar = sinAdaptar;
  }

  public saludarEnIngles(): string {
    let message = this.sinAdaptar.saludarEspañol();

    // se realiza la adaptación
    message = message.replace("Hola", "Hello");
    message = message.replace("Mundo", "World");

    return `TRADUCIDO: ${message}`;
  }
}

// ---------------------------------------------------------------------------------------------

/**
* El código cliente soporta todas las clases que siguen la interfaz EstadoUnidense.
*/
function codigoCliente(objetivo: EstadoUnidense) {
  return objetivo.saludarEnIngles();
}

//  Puedo trabajar perfectamente con objeto EstadoUnidense:
const persona_eeuu = new EstadoUnidense();
const message1 = codigoCliente(persona_eeuu);
console.log(message1); // ORIGINAL: Hello World

// pero no puedo trabajar con objeto Espanol
const persona_espanol = new Espanol();
// const message2 = codigoCliente(persona_espanol); // 'Espanol' no es asignable, se esperaba 'EstadoUnidense'
// console.log(message2);

// Pero puedo trabajar con objetos Adaptador
const persona_adaptado_a_eeuu = new Adaptador(persona_espanol);
const message3 = codigoCliente(persona_adaptado_a_eeuu);
console.log(message3); // TRADUCIDO: Hello World
