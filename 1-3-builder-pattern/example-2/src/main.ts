/**
 * La interfaz Builder especifica métodos para crear las diferentes partes de
 * los objetos Producto.
 */
interface Builder {
  producePartA(): void; // Example --> ensamblarMotor()
  producePartB(): void; // Example --> ensamblarRuedas()
  producePartC(): void; // Example --> ensamblarAsientos()
}
 
// ---------------------------------------------------------------------------------------------------
/**
 * Las clases Concrete Builder siguen la interfaz Builder y proporcionan
 * implementaciones específicas de los pasos de construcción. Tu programa puede tener varias
 * variaciones de Builders, implementadas de manera diferente.
 */
class ConcreteBuilder1 implements Builder { // Example --> ConstructorCoche
  private product: Product1; // Example --> private coche: Coche

  /**
     * Una nueva instancia de constructor debe contener un objeto producto en blanco, que es
     * utilizado en el ensamblaje posterior.
     */
  constructor() {
      this.reset();
  }

  public reset(): void {
      this.product = new Product1(); // Example --> this.coche = new Coche()
  }

  /**
     * Todos los pasos de producción trabajan con la misma instancia de producto.
     */
  public producePartA(): void { // Example --> ensamblarMotor()
      this.product.parts.push('PartA1');
  }

  public producePartB(): void { // Example --> ensamblarRuedas()
      this.product.parts.push('PartB1');
  }

  public producePartC(): void { // Example --> ensamblarAsientos()
      this.product.parts.push('PartC1');
  }

 /**
     * Los Constructores Concretos deben proporcionar sus propios métodos para
     * recuperar resultados. Esto se debe a que varios tipos de constructores pueden crear
     * productos completamente diferentes que no siguen la misma interfaz.
     * Por lo tanto, tales métodos no pueden declararse en la interfaz Builder base
     * (al menos en un lenguaje de programación tipado estáticamente).
     *
     * Por lo general, después de devolver el resultado final al cliente, se espera que una instancia del constructor
     * esté lista para comenzar a producir otro producto. Es por eso
     * una práctica habitual llamar al método de reset al final del
     * cuerpo del método `getProduct`. Sin embargo, este comportamiento no es obligatorio, y
     * puedes hacer que tus constructores esperen una llamada de reset explícita desde el
     * código del cliente antes de eliminar el resultado anterior.
     */
  public getProduct(): Product1 {
      const result = this.product; // Example --> const result = this.coche
      this.reset();
      return result;
  }
}

// ---------------------------------------------------------------------------------------------------
/**
 * Tiene sentido usar el patrón Builder solo cuando tus productos son bastante
 * complejos y requieren una configuración extensa.
 *
 * A diferencia de en otros patrones creacionales, diferentes constructores concretos pueden producir
 * productos no relacionados. En otras palabras, los resultados de varios constructores pueden no
 * siempre seguir la misma interfaz.
 */
class Product1 { // Example --> Coche
  public parts: string[] = [];

  public listParts(): void { // Example --> listarPartes()
      console.log(`Product parts: ${this.parts.join(', ')}\n`);
  }
}

// ---------------------------------------------------------------------------------------------------
/**
 * El Director solo es responsable de ejecutar los pasos de construcción en un
 * secuencia particular. Es útil al producir productos según un
 * orden o configuración específica. Estrictamente hablando, la clase Director es
 * opcional, ya que el cliente puede controlar los constructores directamente.
 */
class Director {
  private builder: Builder;

  /**
     * El Director trabaja con cualquier instancia de constructor que el código del cliente pase
     * a él. De esta manera, el código del cliente puede alterar el tipo final del producto recién
     * ensamblado.
     */
  public setBuilder(builder: Builder): void { 
      this.builder = builder;
  }

  /**
     * El Director puede construir varias variaciones de productos utilizando los mismos
     * pasos de construcción.
     */
  public buildMinimalViableProduct(): void { // Example --> construirCocheBasico()
      this.builder.producePartA();
  }

  public buildFullFeaturedProduct(): void { // Example --> construirCocheCompleto()
      this.builder.producePartA();
      this.builder.producePartB();
      this.builder.producePartC();
  }
}

// ---------------------------------------------------------------------------------------------------

/**
 * El código del cliente crea un objeto constructor, lo pasa al director y luego
 * inicia el proceso de construcción. El resultado final se recupera del
 * objeto constructor.
 */
function clientCode(director: Director) {
  const builder = new ConcreteBuilder1(); // Example --> const builder = new ConstructorCoche()
  director.setBuilder(builder); 

  console.log('Standard basic product:');
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log('Standard full featured product:');
  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();

  // Recuerda, el patrón Builder se puede usar sin una clase Director.
  console.log('Custom product:');
  builder.producePartA();
  builder.producePartC();
  builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);