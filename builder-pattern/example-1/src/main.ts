import { Producto } from './../../../factory-method-pattern/example-2/src/clases/Product';
class Car {

}

class Manual {

}

// ---------------------------------------------------------------------------------------------------------

interface Builder {
  reset(): void;
  setAsientos(seats: number): void;
  setMotor(engine: string): void;
  setTripComputer(tripComputer: boolean): void;
  setGPS(gps: boolean): void;
  getProduct(): any;
}

// ---------------------------------------------------------------------------------------------------------
class CarBuilder implements Builder {
  private car: Car;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.car = new Car();
  }

  setAsientos(seats: number): void {
    // Establece la cantidad de asientos del coche.
  }

  setMotor(engine: string): void {
    // Instala un motor específico.
  }

  setTripComputer(tripComputer: boolean): void {
    // Instala una computadora de navegación.
  }

  setGPS(gps: boolean): void {
    // Instala un GPS.
  }

  getProduct(): Car {
    const producto = this.car;
    // this.reset();

    return producto;
  }
}
// ---------------------------------------------------------------------------------------------------------

class ManualBuilder implements Builder {
  private manual: Manual;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.manual = new Manual();
  }

  setAsientos(seats: number): void {
    // Documenta las características del asiento del coche.
  }

  setMotor(engine: string): void {
    // Añade instrucciones del motor.
  }

  setTripComputer(tripComputer: boolean): void {
    // Añade instrucciones de la computadora de navegación.
  }

  setGPS(gps: boolean): void {
    // Añade instrucciones del GPS.
  }

  getProduct(): Manual {
    // Devuelve el manual y rearma el constructor.

    const producto = this.manual;
    // this.reset();

    return producto;
  }
}

// ---------------------------------------------------------------------------------------------------------

class Director {

  constructSportsCar(builder: Builder): void {
    builder.reset();
    builder.setAsientos(2);
    builder.setMotor('V8'); // builder.setEngine(new SportEngine())
    builder.setTripComputer(true);
    builder.setGPS(true);

    return builder.getProduct();
  }

  constructFamilyCar(builder: Builder): void {
    builder.setAsientos(8);
    builder.setMotor('V4');
    builder.setTripComputer(true);
    builder.setGPS(true);

    return builder.getProduct();
  }
}

// ---------------------------------------------------------------------------------------------------------

class Aplication {
  makeCar() {
    const director: Director = new Director();
    
    const carBuilder: CarBuilder = new CarBuilder();
    const car:Car = CarBuilder.getProduct();
    // const car: Car = director.constructSportsCar(carBuilder);
    
    const manualBuilder: ManualBuilder = new ManualBuilder();
    const manual: Manual = manualBuilder.getProduct();
  }

}