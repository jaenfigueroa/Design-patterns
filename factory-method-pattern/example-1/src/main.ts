import { Barco } from './class/Barco'
import { Camion } from './class/Camion'
import { Transporte } from './class/Transporte'

abstract class Logistica {
  // constructor(nombre, edad) {
  //   this.nombre = nombre;
  //   this.edad = edad;
  // }

  planDelivery() {
    const transporte = this.createTransport()
    transporte.entregar()
  }

  abstract createTransport(): Transporte // el metodo factory, sabemos que devuelve un Transporte, pero no nos intereza saber como realiza la entrega
}

/////////////////////////////////////////////////////////
class TierraLogistica extends Logistica {
  createTransport(): Transporte {
    return new Camion()
  }
}

class MarLogistica extends Logistica {
  createTransport(): Transporte {
    return new Barco()
  }
}

/////////////////////////////////////////////////////////
const a = new TierraLogistica()
a.planDelivery()

const b = new MarLogistica()
b.planDelivery()

// Revisar la consola del navegador
