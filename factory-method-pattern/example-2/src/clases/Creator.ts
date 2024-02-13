import { Manzana, Pera, Producto } from './Product'

/* 
  La clase Creator declara el método de fábrica que se supone que devuelve un objeto de una clase Producto.
  Las subclases de Creator suelen proporcionar la implementación de este método.
*/
export abstract class Creator {
  /* 
    Ten en cuenta que el Creator también puede proporcionar alguna implementación predeterminada del
    método de fábrica.
  */
  public abstract factoryMethod(): Producto

  /* 
    También ten en cuenta que, a pesar de su nombre, la responsabilidad principal del Creator no es
    crear productos. Por lo general, contiene alguna lógica empresarial central que
    se basa en objetos Producto, devueltos por el método de fábrica. Las subclases pueden
    cambiar indirectamente esa lógica empresarial anulando el método de fábrica
    y devolviendo un tipo de producto diferente desde él.
  */
  public algunaOperacion(): string {
    // Llama al método de fábrica para crear un objeto Producto.
    const product = this.factoryMethod()
    // Ahora, usa el producto.
    return `Creator: The same creator's code has just worked with ${product.operacion()}`
  }
}

/* 
  Los Creadores Concretos anulan el método de fábrica para cambiar el
  tipo de producto resultante.
*/
export class ConcreteCreator1 extends Creator {
  /* 
    Ten en cuenta que la firma del método sigue utilizando el tipo de producto abstracto,
    incluso aunque el producto concreto realmente se devuelva desde el método. De esta manera,
    el Creator puede mantenerse independiente de las clases de productos concretos.
  */
  public factoryMethod(): Producto {
    return new Manzana()
  }
}

export class ConcreteCreator2 extends Creator {
  public factoryMethod(): Producto {
    return new Pera()
  }
}
