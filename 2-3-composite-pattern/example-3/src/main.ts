/**
 * La clase Componente base declara operaciones comunes tanto para objetos
 * simples como complejos de una composición.
 */

abstract class BaseComponent {
  protected parent!: BaseComponent | null;

  /**
   * Opcionalmente, la clase Componente base puede declarar una interfaz para
   * establecer y acceder a un padre del componente en una estructura de árbol.
   * También puede proporcionar alguna implementación predeterminada para estos métodos.
   */
  public setParent(parent: BaseComponent | null) {
    this.parent = parent;
  }

  public getParent(): BaseComponent | null {
    return this.parent;
  }

  /**
   * En algunos casos, sería beneficioso definir las operaciones de gestión de
   * hijos directamente en la clase Componente base. De esta manera, no necesitarás
   * exponer ninguna clase de componente concreta al código cliente, incluso durante
   * el ensamblaje del árbol de objetos. La desventaja es que estos métodos estarán
   * vacíos para los componentes de nivel de hoja.
   */

  public add(component: BaseComponent): void { }

  public remove(component: BaseComponent): void { }

  /**
   * Puedes proporcionar un método que permita al código cliente averiguar si un
   * componente puede tener hijos.
   */
  public isComposite(): boolean {
    return false;
  }

  /**
   * La clase Componente base puede implementar algún comportamiento predeterminado
   * o dejarlo a las clases concretas (declarando el método que contiene el
   * comportamiento como "abstracto").
   */
  public abstract operation(): string;
}


// ------------------------------------------------------------------------------------------------
/**
 * La clase Hoja representa los objetos finales de una composición. Una hoja no
 * puede tener hijos.
 *
 * Por lo general, son los objetos Hoja los que realizan el trabajo real, mientras
 * que los objetos Compuestos solo delegan a sus subcomponentes.
 */

class Leaf extends BaseComponent {
  public operation(): string {
    return 'Leaf';
  }
}

/**
 * La clase Compuesto representa los componentes complejos que pueden tener hijos.
 * Por lo general, los objetos Compuestos delegan el trabajo real a sus hijos y
 * luego "suman" el resultado.
 */

class Composite extends BaseComponent {
  protected children: BaseComponent[] = [];

  /**
   * Un objeto compuesto puede agregar o eliminar otros componentes (tanto simples
   * como complejos) a o desde su lista de hijos.
   */

  public add(component: BaseComponent): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: BaseComponent): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);

    component.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  /**
   * El Compuesto ejecuta su lógica principal de una manera particular. Recorre
   * recursivamente todos sus hijos, recolectando y sumando sus resultados. Dado
   * que los hijos del compuesto pasan estas llamadas a sus hijos y así
   * sucesivamente, todo el árbol de objetos se recorre como resultado.
   */
  public operation(): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.operation());
    }

    return `Branch(${results.join('+')})`;
  }
}

/**
 * El código cliente trabaja con todos los componentes a través de la interfaz base.
 */

function clientCode(component: BaseComponent) {
  // ...

  console.log(`RESULT: ${component.operation()}`);

  // ...
}

/**
 * De esta manera, el código cliente puede admitir los componentes de hoja simples...
 */

const simple = new Leaf();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

/**
 * ...así como los compuestos complejos.
 */

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log('Client: Now I\'ve got a composite tree:');
clientCode(tree);
console.log('');

/**
 * Gracias al hecho de que las operaciones de gestión de hijos están declaradas en
 * la clase Componente base, el código cliente puede trabajar con cualquier
 * componente, simple o complejo, sin depender de sus clases concretas.
 */

function clientCode2(component1: BaseComponent, component2: BaseComponent) {
  // ...

  if (component1.isComposite()) {
    component1.add(component2);
  }
  console.log(`RESULT: ${component1.operation()}`);

  // ...
}

console.log('Client: I don\'t need to check the components classes even when managing the tree:');
clientCode2(tree, simple);