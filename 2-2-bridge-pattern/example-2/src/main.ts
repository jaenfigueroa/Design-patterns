/**
 * La Abstracción define la interfaz para la parte "control" de las dos jerarquías de clases.
 * Mantiene una referencia a un objeto de la jerarquía de Implementación y delega t0do el trabajo real a este objeto.
 */

class Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
      this.implementation = implementation;
  }

  public operation(): string {
      const result = this.implementation.operationImplementation();
      return `Abstraction: Base operation with:\n${result}`;
  }
}

/**
 * Puedes extender la Abstracción sin cambiar las clases de Implementación.
 */

class ExtendedAbstraction extends Abstraction {
  public operation(): string {
      const result = this.implementation.operationImplementation();
      return `ExtendedAbstraction: Extended operation with:\n${result}`;
  }
}

/**
 * La Implementación define la interfaz para todas las clases de implementación.
 * No tiene que coincidir con la interfaz de la Abstracción. De hecho, las dos
 * interfaces pueden ser completamente diferentes. Típicamente, la interfaz de Implementación
 * solo proporciona operaciones primitivas, mientras que la Abstracción define operaciones de nivel superior
 * basadas en esas primitivas.
 */

interface Implementation {
  operationImplementation(): string;
}

/**
 * Cada Implementación Concreta corresponde a una plataforma específica y
 * implementa la interfaz de Implementación utilizando la API de esa plataforma.
 */

class ConcreteImplementationA implements Implementation {
  public operationImplementation(): string {
      return 'ConcreteImplementationA: Here\'s the result on the platform A.';
  }
}

class ConcreteImplementationB implements Implementation {
  public operationImplementation(): string {
      return 'ConcreteImplementationB: Here\'s the result on the platform B.';
  }
}

/**
 * Excepto en la fase de inicialización, donde un objeto de Abstracción se vincula
 * con un objeto de Implementación específico, el código del cliente solo debe depender de
 * la clase de Abstracción. De esta manera, el código del cliente puede admitir cualquier combinación de
 * abstracción-implementación.
 */
function clientCode(abstraction: Abstraction) {
  // ..

  console.log(abstraction.operation());

  // ..
}

/**
 * El código del cliente debería poder funcionar con cualquier combinación de
 * abstracción-implementación preconfigurada.
 */

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log('');

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);