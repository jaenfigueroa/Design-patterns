class ComponentWithBackReference {
  public prototype;

  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

// ------------------------------------------------------------------------------------
/**
 * Clase de ejemplo que tiene la capacidad de clonación. Veremos cómo se clonarán los valores
 * de campos con diferentes tipos.
 */
class Prototype {
  public primitive: any;
  public component: object;
  public circularReference: ComponentWithBackReference;

  public clone(): this {
    const copia = Object.create(this);
    console.log(copia);
    
    copia.component = Object.create(this.component);

    // La clonación de un objeto que tiene un objeto anidado con referencia circular
    // requiere un tratamiento especial. Después de completar la clonación, el objeto anidado
    // debe apuntar al objeto clonado, en lugar del objeto original. El operador spread puede
    // ser útil para este caso.

    /*
    Por ejemplo, en programación orientada a objetos, una clase A podría tener una referencia a un objeto de la clase B,
    mientras que la clase B tiene una referencia de vuelta a un objeto de la clase A. Esto crea una referencia circular
    entre las dos clases.
    */
    copia.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    return copia;
  }
}

// ------------------------------------------------------------------------------------
/**
* El código del cliente.
*/
function clientCode() {
  const original = new Prototype();

  original.primitive = 245;
  original.component = new Date();
  original.circularReference = new ComponentWithBackReference(original);

  const copy = original.clone();

  //////////////////////////////////////////////////////////////
  
  console.log("original: ", original);
  console.log("copy: ", copy);

  // COMPROBACIONES
  if (original.primitive === copy.primitive) {
    console.log('1. Los valores de los campos primitivos se han copiado en el clon. ¡Hurra!');
  } else {
    console.log('1x. Los valores de los campos primitivos no se han copiado. ¡Bu!');
  }
  if (original.component === copy.component) {
    console.log('2. El componente simple no ha sido clonado. ¡Bu!');
  } else {
    console.log('2x. El componente simple ha sido clonado. ¡Hurra!');
  }

  if (original.circularReference === copy.circularReference) {
    console.log('3. El componente con referencia circular no ha sido clonado. ¡Bu!');
  } else {
    console.log('3x. El componente con referencia circular ha sido clonado. ¡Hurra!');
  }

  if (original.circularReference.prototype === copy.circularReference.prototype) {
    console.log('4. El componente con referencia circular está vinculado al objeto original. ¡Bu!');
  } else {
    console.log('4x. El componente con referencia circular está vinculado al clon. ¡Hurra!');
  }
}

clientCode();