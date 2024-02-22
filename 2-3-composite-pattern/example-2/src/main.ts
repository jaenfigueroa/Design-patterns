//⭐

import Circulo from "./Circulo";
import Cuadradro from "./Cuadrado";
import Paquete from "./Paquete";
import Rectangulo from "./Rectangulo";
import Rombo from "./Rombo";
import Trapecio from "./Trapecio";
import Triangulo from "./Triangulo";

export interface Figura {
  area(): number;
  perimetro(): number;
}

// ------------------------------------------------------------------------

// USO: obtener la suma de áreas y la suma de perímetros de todas las figuras
// que contiene un paquete, este paquete puede contener figuras individuales como también contener otros paquetes.

const paquete_1 = new Paquete();
const paquete_2 = new Paquete();
const paquete_3 = new Paquete();
const paquete_4 = new Paquete();

const circulo = new Circulo(3);
const cuadrado = new Cuadradro(3)
const rectangulo = new Rectangulo(3, 4)
const rombo = new Rombo(3, 4)
const trapecio = new Trapecio(3, 4, 5)
const triangulo = new Triangulo(3, 4)

paquete_1.add(circulo);
paquete_1.add(cuadrado);
paquete_2.add(rectangulo);
paquete_2.add(rombo);
paquete_3.add(trapecio);
paquete_4.add(triangulo);

paquete_1.add(paquete_2);
paquete_2.add(paquete_3);
paquete_3.add(paquete_4);

const areaTotal = paquete_1.area();
const perimetroTotal = paquete_1.perimetro();

console.log({areaTotal, perimetroTotal}); // { areaTotal: 78.7743, perimetroTotal: 80.8495}

