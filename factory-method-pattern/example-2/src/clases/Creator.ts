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

  /**
   * Also note that, despite its name, the Creator's primary responsibility is
   * not creating products. Usually, it contains some core business logic that
   * relies on Product objects, returned by the factory method. Subclasses can
   * indirectly change that business logic by overriding the factory method
   * and returning a different type of product from it.
   */
  public someOperation(): string {
    // Call the factory method to create a Product object.
    const product = this.factoryMethod()
    // Now, use the product.
    return `Creator: The same creator's code has just worked with ${product.operacion()}`
  }
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
export class ConcreteCreator1 extends Creator {
  /**
   * Note that the signature of the method still uses the abstract product
   * type, even though the concrete product is actually returned from the
   * method. This way the Creator can stay independent of concrete product
   * classes.
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
