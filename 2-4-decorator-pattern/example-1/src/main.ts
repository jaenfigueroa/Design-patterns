interface Componente {
  ejecutar(): string;
}

class ComponenteConcreto implements Componente {
  ejecutar(): string {
    return 'ComponenteConcreto';
  }
}

class Decorador implements Componente {
  private envoltorio: Componente;

  constructor(envoltorio: Componente) {
    this.envoltorio = envoltorio;
  }

  ejecutar(): string {
    return this.envoltorio.ejecutar();
  }
}

class DecoradorConcretoA extends Decorador {
  ejecutar(): string {
    return `DecoradorConcretoA(${super.ejecutar()})`;
  }
}

class DecoradorConcretoB extends Decorador {
  ejecutar(): string {
    return `DecoradorConcretoB(${super.ejecutar()})`;
  }
}

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
