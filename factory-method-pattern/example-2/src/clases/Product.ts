// La interfaz Producto declara las operaciones que todos los productos concretos deben implementar.
export interface Producto {
  operacion(): string
}

// Los Productos Concretos proporcionan varias implementaciones de la interfaz Producto.
export class Manzana implements Producto {
  public operacion(): string {
    return '{Result of the ConcreteProduct1}'
  }
}

export class Pera implements Producto {
  public operacion(): string {
    return '{Result of the ConcreteProduct2}'
  }
}
