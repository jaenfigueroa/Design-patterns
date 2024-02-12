import { Transporte } from './Transporte'

export class Barco extends Transporte {
  public entregar(): void {
    console.log('Entregando por mar')
  }
}
