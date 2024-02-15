export interface Checkbox {
  onActive(): void
}

export class WindowsCheckbox implements Checkbox {
  onActive() {
    console.log('Windows checkbox active')
  }
}

export class MacCheckbox implements Checkbox {
  onActive() {
    console.log('Mac checkbox active')
  }
}
