class Singleton {
  private static instance: Singleton; // La instancia única de la clase. Se inicializa como nula.

  private constructor() {} // El constructor es privado para evitar la creación de instancias con el operador new.

  public static getInstance(): Singleton { // El método estático que controla el acceso a la instancia única de la clase.
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

