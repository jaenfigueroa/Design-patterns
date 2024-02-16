interface Prototype {
  getColor(): string;

  clone(): Prototype;
}

// --------------------------------------------------------------------------
class Button implements Prototype {
  private x: number;
  private y: number;
  color: string;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  getColor(): string {
    return this.color;
  }

  clone(): Prototype {
    return new Button(this.x, this.y, this.color);
  }
}

// --------------------------------------------------------------------------
// class PrototypeRegistry {
//   private items: { [id: string]: Prototype } = {};

//   addItem(id: string, prototype: Prototype) {
//     this.items[id] = prototype;
//   }

//   getById(id: string): Prototype {
//     return this.items[id].clone();
//   }

//   getByColor(color: string): Prototype {

//     for (let i = 0; i < this.items.length; i++) {
//       if (this.items[i].getColor() === color) {
//         return this.items[i].clone();
//       }
//     }
//   }
// }
// --------------------------------------------------------------------------

const codeClient = () => {
  const button = new Button(10, 10, 'red');
  console.log("original: ", button);

  const copy = button.clone();
  console.log("copia: ", copy);

  console.log('modificar original: ------------------');
  button.color = 'blue';

  console.log("original: ", button);
  console.log("copia: ", copy);

}

codeClient()