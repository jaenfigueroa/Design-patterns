export interface Button {
  onClick(): void
  paint(): void
}

export class WindowsButton implements Button {
  onClick() {
    console.log('Windows button clicked')
  }
  paint(): void {
    console.log('Windows button painted')
  }
}

export class MacButton implements Button {
  onClick() {
    console.log('Mac button clicked')
  }
  paint(): void {
    console.log('Mac button painted')
  }
}
