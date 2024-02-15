/**
 * La interfaz de Fábrica Abstracta declara un conjunto de métodos que retornan
 * diferentes productos abstractos. Estos productos son llamados una familia y están
 * relacionados por un tema o concepto de alto nivel. Los productos de una familia
 * suelen ser capaces de colaborar entre sí. Una familia de productos puede tener varios
 * variantes, pero los productos de una variante son incompatibles con los productos de
 * otra.
 */
interface AbstractFactory { // example --> GUIFactory
  createProductA(): AbstractProductA // example --> Button

  createProductB(): AbstractProductB // example --> Checkbox
}

/**
 * Las Fábricas Concretas producen una familia de productos que pertenecen a una única
 * variante. La fábrica garantiza que los productos resultantes sean compatibles. Ten en cuenta
 * que las firmas de los métodos de la Fábrica Concreta retornan un producto abstracto,
 * mientras que dentro del método se instancia un producto concreto.
 */
class ConcreteFactory1 implements AbstractFactory { // example --> WindowsFactory
  public createProductA(): AbstractProductA { // example --> WindowsButton
    return new ConcreteProductA1()
  }

  public createProductB(): AbstractProductB { // example --> WindowsCheckbox
    return new ConcreteProductB1()
  }
}

/**
 * Cada Fábrica Concreta tiene una variante de producto correspondiente.
 */
class ConcreteFactory2 implements AbstractFactory { // example --> MacFactory
  public createProductA(): AbstractProductA { // example --> MacButton
    return new ConcreteProductA2()
  }

  public createProductB(): AbstractProductB { // example --> MacCheckbox
    return new ConcreteProductB2()
  }
}

// -----------------------------------------------------------------------------------------------------------
/**
 * Cada producto distinto de una familia de productos debe tener una interfaz base. Todos
 * las variantes del producto deben implementar esta interfaz.
 */
interface AbstractProductA { // example --> Button
  usefulFunctionA(): string
}

/**
 * Estos Productos Concretos son creados por Fábricas Concretas correspondientes.
 */
class ConcreteProductA1 implements AbstractProductA { // example --> WindowsButton
  public usefulFunctionA(): string {
    return 'The result of the product A1.'
  }
}

class ConcreteProductA2 implements AbstractProductA { // example --> MacButton
  public usefulFunctionA(): string {
    return 'The result of the product A2.'
  }
}

// -----------------------------------------------------------------------------------------------------------

/**
 * Aquí está la interfaz base de otro producto. Todos los productos pueden interactuar
 * entre sí, pero la interacción adecuada es posible solo entre productos de la misma
 * variante concreta.
 */
interface AbstractProductB { // example --> Checkbox
  /**
   * El Producto B puede hacer su propia cosa...
   */
  usefulFunctionB(): string

  /**
   * ...pero también puede colaborar con el ProductoA.
   *
   * La Fábrica Abstracta se asegura de que todos los productos que crea sean de la
   * misma variante y, por lo tanto, compatibles.
   */
  anotherUsefulFunctionB(collaborator: AbstractProductA): string
}

/**
 * Estos Productos Concretos son creados por Fábricas Concretas correspondientes.
 */
class ConcreteProductB1 implements AbstractProductB { // example --> WindowsCheckbox
  public usefulFunctionB(): string {
    return 'The result of the product B1.'
  }

  /**
   * La variante, Producto B1, solo puede funcionar correctamente con la variante,
   * Producto A1. Sin embargo, acepta cualquier instancia de AbstractProductA como
   * un argumento.
   */
  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA()
    return `The result of the B1 collaborating with the (${result})`
  }
}

class ConcreteProductB2 implements AbstractProductB { // example --> MacCheckbox
  public usefulFunctionB(): string {
    return 'The result of the product B2.'
  }

  /**
   * La variante, Producto B2, solo puede funcionar correctamente con la variante,
   * Producto A2. Sin embargo, acepta cualquier instancia de AbstractProductA como
   * un argumento.
   */
  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA()
    return `The result of the B2 collaborating with the (${result})`
  }
}

// -----------------------------------------------------------------------------------------------------------

/**
 * El código del cliente trabaja con fábricas y productos solo a través de tipos abstractos:
 * AbstractFactory y AbstractProduct. Esto te permite pasar cualquier subclase de fábrica o
 * producto al código del cliente sin romperlo.
 */
function clientCode(factory: AbstractFactory) { // example --> factory: GUIFactory
  const productA = factory.createProductA() // example --> productA = factory.createButton()
  const productB = factory.createProductB() // example --> productB = factory.createCheckbox()

  console.log(productB.usefulFunctionB())
  console.log(productB.anotherUsefulFunctionB(productA))
}

/**
 * El código del cliente puede trabajar con cualquier clase de fábrica concreta.
 */
console.log('Client: Testing client code with the first factory type...')
clientCode(new ConcreteFactory1()) // example --> clientCode(new WindowsFactory())

console.log('')

console.log(
  'Client: Testing the same client code with the second factory type...',
)
clientCode(new ConcreteFactory2()) // example --> clientCode(new MacFactory())
