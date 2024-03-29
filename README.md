# Patrones de diseño

Source: https://refactoring.guru/es/

## Patrones de creación

Estos patrones proporcionan mecanismos de creación de objetos que incrementan la flexibilidad y la reutilización del código existente.

- [x] [Factory Method](https://refactoring.guru/es/design-patterns/factory-method) proporciona una interfaz para crear objetos en una superclase, mientras permite a las subclases alterar el tipo de objetos que se crearán.
- [x] [Abstract Factory](https://refactoring.guru/es/design-patterns/abstract-factory) permite producir familias de objetos relacionados sin especificar sus clases concretas.
- [x] [Builder](https://refactoring.guru/es/design-patterns/builder) permite construir objetos complejos paso a paso. Nos permite producir distintos tipos y representaciones de un objeto empleando el mismo código de construcción.
- [x] [Prototype](https://refactoring.guru/es/design-patterns/prototype) permite copiar objetos existentes sin que el código dependa de sus clases.
- [x] [Singleton](https://refactoring.guru/es/design-patterns/singleton) permite asegurar de que una clase tenga una única instancia, a la vez que proporciona un punto de acceso global a dicha instancia.

## Patrones estructurales

Estos patrones explican cómo ensamblar objetos y clases en estructuras más grandes, mientras se mantiene la flexibilidad y eficiencia de la estructura.

- [x] [Adapter](https://refactoring.guru/es/design-patterns/adapter) permite la colaboración entre objetos con interfaces incompatibles.
- [x] [Bridge](https://refactoring.guru/es/design-patterns/bridge) permite dividir una clase grande, o un grupo de clases estrechamente relacionadas, en dos jerarquías separadas (abstracción e implementación) que pueden desarrollarse independientemente la una de la otra.
- [x] [Composite](https://refactoring.guru/es/design-patterns/composite) permite componer objetos en estructuras de árbol y trabajar con esas estructuras como si fueran objetos individuales.
- [X] [Decorator](https://refactoring.guru/es/design-patterns/decorator) te permite añadir funcionalidades a objetos colocando estos objetos dentro de objetos encapsuladores especiales que contienen estas funcionalidades. Permite añadir dinámicamente nuevos comportamientos a objetos colocándolos dentro de objetos especiales que los envuelven (_wrappers_).
- [x] [Facade](https://refactoring.guru/es/design-patterns/facade) proporciona una interfaz simplificada a una biblioteca, un framework o cualquier otro grupo complejo de clases.
- [x] [Flyweight](https://refactoring.guru/es/design-patterns/flyweight) te permite mantener más objetos dentro de la cantidad disponible de RAM compartiendo las partes comunes del estado entre varios objetos en lugar de mantener toda la información en cada objeto.
- [ ] [Proxy](https://refactoring.guru/es/design-patterns/proxy) permite proporcionar un sustituto o marcador de posición para otro objeto. Un proxy controla el acceso al objeto original, permitiéndote hacer algo antes o después de que la solicitud llegue al objeto original.



## Patrones de comportamiento

Estos patrones tratan con algoritmos y la asignación de responsabilidades entre objetos.

- [ ] Chain of Responsibility
- [ ] Command
- [ ] Iterator
- [ ] Mediator
- [ ] Memento
- [ ] Observer
- [ ] State
- [ ] Strategy
- [ ] Template Method
- [ ] Visitor
