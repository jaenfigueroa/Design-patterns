interface Pedido {
  precioTotal(): number;
}

class Producto implements Pedido {
  public nombre: string;
  public precio: number;

  constructor(nombre: string, precio: number) {
    this.nombre = nombre;
    this.precio = precio;
  }
  
  precioTotal(): number {
    return this.precio;
  }
}

class Paquete implements Pedido {
  productos: Pedido[] = [];

  add(producto: Pedido) {
    this.productos.push(producto);
  }
  
  precioTotal(): number {
    let suma = 0;

    for (const producto of this.productos) {
      suma += producto.precioTotal();
    }

    return suma;
  }
}

// ----------------------------------------------------------------------------------------------------

// USO

const paquete1 = new Paquete();
const producto1 = new Producto('Producto 1', 100);
const producto2 = new Producto('Producto 2', 200);
paquete1.add(producto1);
paquete1.add(producto2);


const paquete2 = new Paquete();
const producto3 = new Producto('Producto 3', 300);
const producto4 = new Producto('Producto 4', 300);
paquete1.add(producto3);
paquete2.add(producto4);

const paquete3 = new Paquete();
const producto5 = new Producto('Producto 5', 300);
paquete3.add(producto5);

paquete2.add(paquete3);
paquete1.add(paquete2);


console.log(paquete1.precioTotal()); // 1200
