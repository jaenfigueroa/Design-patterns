/**
 * Clase de ejemplo que tiene la capacidad de clonación. Veremos cómo se clonarán los valores
 * de campos con diferentes tipos.
 */
class Prototype {
  public primitive: any;
  public component: object;
  public circularReference: ComponentWithBackReference;

  public clone(): this {
    const clone = Object.create(this);

    clone.component = Object.create(this.component);

    // La clonación de un objeto que tiene un objeto anidado con referencia circular
    // requiere un tratamiento especial. Después de completar la clonación, el objeto anidado
    // debe apuntar al objeto clonado, en lugar del objeto original. El operador spread puede
    // ser útil para este caso.
    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    return clone;
  }
}

class ComponentWithBackReference {
  public prototype;

  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

/**
* El código del cliente.
*/
function clientCode() {
  const original = new Prototype();

  original.primitive = 245;
  original.component = new Date();
  original.circularReference = new ComponentWithBackReference(original);

  const copy = original.clone();

  console.log("original: ", original);
  console.log("copy: ", copy);

  if (original.primitive === copy.primitive) {
    console.log('Los valores de los campos primitivos se han copiado en el clon. ¡Hurra!');
  } else {
    console.log('Los valores de los campos primitivos no se han copiado. ¡Bu!');
  }
  if (original.component === copy.component) {
    console.log('El componente simple no ha sido clonado. ¡Bu!');
  } else {
    console.log('El componente simple ha sido clonado. ¡Hurra!');
  }

  if (original.circularReference === copy.circularReference) {
    console.log('El componente con referencia circular no ha sido clonado. ¡Bu!');
  } else {
    console.log('El componente con referencia circular ha sido clonado. ¡Hurra!');
  }

  if (original.circularReference.prototype === copy.circularReference.prototype) {
    console.log('El componente con referencia circular está vinculado al objeto original. ¡Bu!');
  } else {
    console.log('El componente con referencia circular está vinculado al clon. ¡Hurra!');
  }
}

clientCode();