import { Button, MacButton, WindowsButton } from './classes/Button'
import { Checkbox, MacCheckbox, WindowsCheckbox } from './classes/Checkbox'

export interface GUIFactory {
  createButton(): Button
  createCheckbox(): Checkbox
}

// ------------------------------------------------------------------
export class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton()
  }

  createCheckbox(): Checkbox {
    return new WindowsCheckbox()
  }
}

// ------------------------------------------------------------------
export class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton()
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox()
  }
}
