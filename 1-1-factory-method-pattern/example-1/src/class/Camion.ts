import { Transporte } from './Transporte'

export class Camion extends Transporte {
  public entregar(): void {
    console.log('Entregando por carretera')
  }
}
