/**
 * La clase Facade proporciona una interfaz simple para la lógica compleja de uno o
 * varios subsistemas. El Facade delega las solicitudes del cliente a los
 * objetos apropiados dentro del subsistema. El Facade también es responsable de
 * gestionar su ciclo de vida. T0do esto protege al cliente de la complejidad no deseada
 * del subsistema.
 */
class Facade {
  protected subsystem1: Subsystem1;
  protected subsystem2: Subsystem2;

  /**
   * Dependiendo de las necesidades de su aplicación, puede proporcionar al Facade
   * objetos de subsistema existentes o forzar al Facade a crearlos por su cuenta.
   */
  constructor(subsystem1?: Subsystem1, subsystem2?: Subsystem2) {
      this.subsystem1 = subsystem1 ?? new Subsystem1();
      this.subsystem2 = subsystem2 ?? new Subsystem2();
  }

  /**
   * Los métodos del Facade son accesos directos convenientes a la sofisticada
   * funcionalidad de los subsistemas. Sin embargo, los clientes solo tienen acceso a una fracción
   * de las capacidades de un subsistema.
   */
  public operation(): string {
      let result = 'Facade initializes subsystems:\n';
      result += this.subsystem1.operation1();
      result += this.subsystem2.operation1();
      result += 'Facade orders subsystems to perform the action:\n';
      result += this.subsystem1.operationN();
      result += this.subsystem2.operationZ();

      return result;
  }
}

// --------------------------------------------------------------------------------------------------------------------------------
/**
 * El Subsistema puede aceptar solicitudes tanto desde el facade como directamente desde el cliente.
 * En cualquier caso, para el Subsistema, el Facade es simplemente otro cliente, y no es
 * parte del Subsistema.
 */
class Subsystem1 {
  public operation1(): string {
      return 'Subsystem1: Ready!\n';
  }

  // ...

  public operationN(): string {
      return 'Subsystem1: Go!\n';
  }
}

/**
 * Algunos facades pueden trabajar con múltiples subsistemas al mismo tiempo.
 */
class Subsystem2 {
  public operation1(): string {
      return 'Subsystem2: Get ready!\n';
  }

  // ...

  public operationZ(): string {
      return 'Subsystem2: Fire!';
  }
}

// --------------------------------------------------------------------------------------------------------------------------------
// CODIGO DEL CLIENTE

/**
 * El código del cliente trabaja con subsistemas complejos a través de una interfaz simple
 * proporcionada por el Facade. Cuando un facade gestiona el ciclo de vida del subsistema,
 * el cliente podría ni siquiera saber acerca de la existencia del subsistema. Este
 * enfoque le permite mantener la complejidad bajo control.
 */
function clientCode(facade: Facade) {
  // ...
  console.log(facade.operation());
  // ...
}

/**
 * El código del cliente puede tener algunos de los objetos del subsistema ya creados.
 * En este caso, podría valer la pena inicializar el Facade con estos objetos
 * en lugar de dejar que el Facade cree nuevas instancias.
 */
const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);
clientCode(facade);
