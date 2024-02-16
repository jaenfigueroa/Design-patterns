class DataBase {
  private static instance: DataBase;

  private constructor() {
    // Algún código de inicialización, como la propia
    // conexión al servidor de una base de datos.
    // ...
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new DataBase();
    }

    return this.instance;
  }

  // Otros métodos para la base de datos...
}

// ----------------------------------------------------------------------------------------------

const clientCode = () => {
  const db_1 = DataBase.getInstance();
  const db_2 = DataBase.getInstance();

  if (db_1 === db_2) {
    console.log('Singleton funciona, ambas variables contienen la misma instancia.');
  } else {
    console.log('Singleton falló, las variables contienen instancias distintas.');
  }

}


clientCode()