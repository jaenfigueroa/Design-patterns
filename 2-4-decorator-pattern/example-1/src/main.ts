///⭐

// El Componente declara la interfaz común tanto para wrappers como para objetos envueltos.
interface Componente {
  ejecutar(): string;
}

//Componente Concreto es una clase de objetos envueltos. Define el comportamiento básico,
// que los decoradores pueden alterar.
class ComponenteConcreto implements Componente {
  ejecutar(): string {
    return 'ComponenteConcreto';
  }
}

// ------------------------------------------------------------------------------------------

// El Decorador base tiene una referencia al objeto envuelto. La implementación por defecto de
// los métodos del decorador es reenviar el llamado al objeto envuelto.
class DecoradorBase implements Componente {
  private envuelto: Componente;

  constructor(envoltorio: Componente) {
    this.envuelto = envoltorio;
  }

  ejecutar(): string {
    return this.envuelto.ejecutar();
  }
}

// Los Decoradores concretos llaman al método envuelto y alteran su resultado de alguna manera.
class DecoradorConcretoA extends DecoradorBase {
  ejecutar(): string {
    return `DecoradorConcretoA(${super.ejecutar()})`;
  }
}

class DecoradorConcretoB extends DecoradorBase {
  ejecutar(): string {
    return `DecoradorConcretoB(${super.ejecutar()})`;
  }
}

// ------------------------------------------------------------------------------------------

// El código cliente puede envolver componentes en varios decoradores, desde objetos
// simples hasta objetos decoradores compuestos.

const componente = new ComponenteConcreto();
console.log(componente.ejecutar()); // ComponenteConcreto

const decoradorA = new DecoradorConcretoA(componente);
console.log(decoradorA.ejecutar()); // DecoradorConcretoA(ComponenteConcreto)

const decoradorB = new DecoradorConcretoB(componente);
console.log(decoradorB.ejecutar()); // DecoradorConcretoB(ComponenteConcreto)

const decoradorAB = new DecoradorConcretoB(decoradorA);
console.log(decoradorAB.ejecutar()); // DecoradorConcretoB(DecoradorConcretoA(ComponenteConcreto))

const decoradorBA = new DecoradorConcretoA(decoradorB);
console.log(decoradorBA.ejecutar());// DecoradorConcretoA(DecoradorConcretoB(ComponenteConcreto))
