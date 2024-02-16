/**
 * La clase Singleton define el método `getInstance` que permite a los clientes acceder
 * a la única instancia singleton.
 */
class Singleton {
  private static instance: Singleton;

  /**
   * El constructor de Singleton siempre debe ser privado para evitar llamadas de construcción directas con el operador `new`.
   */
  private constructor() { }

  /**
   * El método estático que controla el acceso a la instancia singleton.
   *
   * Esta implementación te permite subclasificar la clase Singleton manteniendo
   * solo una instancia de cada subclase alrededor.
   */
  public static getInstance(): Singleton {
      if (!Singleton.instance) {
          Singleton.instance = new Singleton();
      }

      return Singleton.instance;
  }

  /**
   * Finalmente, cualquier singleton debería definir cierta lógica de negocio, que puede ser
   * ejecutada en su instancia.
   */
  public someBusinessLogic() {
      // ...
  }
}

/**
* El código del cliente.
*/
function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
      console.log('El Singleton funciona, ambas variables contienen la misma instancia.');
  } else {
      console.log('El Singleton falló, las variables contienen instancias diferentes.');
  }
}

clientCode();
