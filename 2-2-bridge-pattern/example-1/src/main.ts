import { Dispositivo, Radio, Tv } from "./Dispositivo";

// La "abstracción" define la interfaz para la parte de
// "ControlRemoto" de las dos jerarquías de clase. Mantiene una
// referencia a un objeto de la jerarquía de "implementación" y
// delega todo el trabajo real a este objeto.

class ControlRemoto {
  protected device: Dispositivo;

  constructor(device: Dispositivo) {
    this.device = device;
  }

  togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  channelDown(): void {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp(): void {
    this.device.setChannel(this.device.getChannel() + 1);
  }
}

// -------------------------------------------------
// USO:
// Puedes extender clases de la jerarquía de abstracción
// independientemente de las clases de dispositivo.

class ControlRemotoAvanzado extends ControlRemoto {
  mute(): void {
    this.device.setVolume(0);
  }
}

// -------------------------------------------------
// En algún lugar del código cliente.
const tv = new Tv()
const controlRemoto = new ControlRemoto(tv)
controlRemoto.togglePower()

const radio = new Radio()
const controlRemotoAvanzado = new ControlRemotoAvanzado(radio)
controlRemotoAvanzado.mute()