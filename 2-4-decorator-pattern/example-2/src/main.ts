/**
 * La interfaz base Componente define operaciones que pueden ser alteradas por
 * decoradores.
 */

// COMPONENTE BASE
interface Component {
  operation(): string;
}

// ------------------------------------------------------------------------------------------
/**
 * Componentes Concretos proveen implementaciones por defecto de las operaciones.
 * Pueden haber varias variaciones de estas clases.
 */

// COMPONENTE CONCRETO
class ConcreteComponent implements Component {
  public operation(): string {
      return 'ConcreteComponent';
  }
}

// ------------------------------------------------------------------------------------------

/**
 * La clase Decorador base sigue la misma interfaz que los otros componentes.
 * El propósito principal de esta clase es definir la interfaz de envoltura para todos
 * los decoradores concretos. La implementación por defecto del código de envoltura
 * puede incluir un campo para almacenar un componente envuelto y los medios para inicializarlo.
 */

// DECORADOR BASE
class DecoratorBase implements Component {
  protected component: Component;

  constructor(component: Component) {
      this.component = component;
  }

  /**
   * El Decorador delega todo el trabajo al componente envuelto.
   */
  public operation(): string {
      return this.component.operation();
  }
}

// ------------------------------------------------------------------------------------------

/**
 * Decoradores Concretos llaman al objeto envuelto y alteran su resultado de alguna manera.
 */

// DECORADOR CONCRETO 1
class ConcreteDecoratorA extends DecoratorBase {
  /**
   * Los decoradores pueden llamar a la implementación padre de la operación, en lugar de
   * llamar directamente al objeto envuelto. Este enfoque simplifica la extensión
   * de clases decoradoras.
   */
  public operation(): string {
      return `ConcreteDecoratorA(${super.operation()})`;
  }
}

/**
 * Los decoradores pueden ejecutar su comportamiento ya sea antes o después de la llamada a un
 * objeto envuelto.
 */

// DECORADOR CONCRETO 2
class ConcreteDecoratorB extends DecoratorBase {
  public operation(): string {
      return `ConcreteDecoratorB(${super.operation()})`;
  }
}

// ------------------------------------------------------------------------------------------

// CODIGO CLIENTE:

/**
 * El código cliente trabaja con todos los objetos usando la interfaz Componente. De esta
 * manera puede mantenerse independiente de las clases concretas de componentes con las que
 * trabaja.
 */
function clientCode(component: Component) {
  console.log(`RESULTADO: ${component.operation()}`);
}

/**
 * De esta manera, el código cliente puede soportar tanto componentes simples...
 */
const simple = new ConcreteComponent();
clientCode(simple);

/**
 * ... como los decorados.
 *
 * Observa cómo los decoradores pueden envolver no solo componentes simples sino también
 * otros decoradores.
 */
const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
clientCode(decorator2);
