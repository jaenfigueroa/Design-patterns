// La interfaz de componente define operaciones que los
// decoradores pueden alterar.
interface DataSource {
  writeData(data: string): void;
  readData(): string;
}

// ------------------------------------------------------------------------------------------
// Los componentes concretos proporcionan implementaciones por
// defecto para las operaciones. En un programa puede haber
// muchas variaciones de estas clases.

class FileDataSource implements DataSource {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  writeData(data: string): void {
     // Escribe datos en el archivo.
    this.fileName = data;
  }

  readData(): string {
     // Lee datos del archivo.
    return this.fileName;
  }
}

// ------------------------------------------------------------------------------------------
// La clase decoradora base sigue la misma interfaz que los
// demás componentes. El principal propósito de esta clase es
// definir la interfaz de encapsulación para todos los
// decoradores concretos. La implementación por defecto del
// código de encapsulación puede incluir un campo para almacenar
// un componente envuelto y los medios para inicializarlo.

class DataSourceDecorator implements DataSource {
  protected wrappee: DataSource;

  constructor(source: DataSource) {
    this.wrappee = source;
  }

  // La decoradora base simplemente delega todo el trabajo al
  // componente envuelto. En los decoradores concretos se
  // pueden añadir comportamientos adicionales.
  writeData(data: string): void {
    this.wrappee.writeData(data);
  }

  // Los decoradores concretos pueden invocar la
  // implementación padre de la operación en lugar de invocar
  // directamente al objeto envuelto. Esta solución simplifica
  // la extensión de las clases decoradoras.
  readData(): string {
    return this.wrappee.readData();
  }
}

// ------------------------------------------------------------------------------------------
// Los decoradores concretos deben invocar métodos en el objeto
// envuelto, pero pueden añadir algo de su parte al resultado.
// Los decoradores pueden ejecutar el comportamiento añadido
// antes o después de la llamada a un objeto envuelto.

class EncryptionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    // 1. Encripta los datos pasados.
    // 2. Pasa los datos encriptados al método writeData
    // (escribirDatos) del objeto envuelto.
    
    super.writeData(this.encrypt(data));
  }

  readData(): string {
    // 1. Obtiene datos del método readData (leerDatos) del
    // objeto envuelto.
    // 2. Intenta descifrarlo si está encriptado.
    // 3. Devuelve el resultado.
    return this.decrypt(super.readData());
  }

  private encrypt(data: string): string {
    return data + ' - encrypted';
  }

  private decrypt(data: string): string {
    return data.replace(' - encrypted', '');
  }
}


// Puedes envolver objetos en varias capas de decoradores.
class CompressionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    // 1. Comprime los datos pasados.
    // 2. Pasa los datos comprimidos al método writeData del
    // objeto envuelto.
    
    super.writeData(this.compress(data));
  }

  readData(): string {
    // 1. Obtiene datos del método readData del objeto
    // envuelto.
    // 2. Intenta descomprimirlo si está comprimido.
    // 3. Devuelve el resultado.
    
    return this.decompress(super.readData());
  }

  private compress(data: string): string {
    return data + ' - compressed';
  }

  private decompress(data: string): string {
    return data.replace(' - compressed', '');
  }
}

// ------------------------------------------------------------------------------------------

// Codigo cliente

const source = new FileDataSource('file.txt');
const encrypted = new EncryptionDecorator(source);
const compressed = new CompressionDecorator(encrypted);

compressed.writeData('data');
console.log(compressed.readData());

// Output: data - encrypted - compressed

