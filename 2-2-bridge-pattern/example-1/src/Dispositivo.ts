export class Dispositivo {
  protected enabled: boolean = false;
  protected volume: number = 0;
  protected channel: number = 0;

  isEnabled(): boolean {
    return this.enabled;
  }

  enable(): void {
    this.enabled = true;
  }

  disable(): void {
    this.enabled = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(volume: number): void {
    if (volume > 100) {
      this.volume = 100;
    } else if (volume < 0) {
      this.volume = 0;
    } else {
      this.volume = volume;
    }
  }

  getChannel(): number {
    return this.channel;
  }

  setChannel(channel: number): void {
    this.channel = channel;
  }
}

// Todos los dispositivos siguen la misma interfaz.
export class Tv extends Dispositivo {
  constructor() {
    super();
    this.volume = 50;
  }
}

export class Radio extends Dispositivo {
  constructor() {
    super();
    this.volume = 30;
  }
}