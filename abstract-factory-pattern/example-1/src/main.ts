abstract class Silla {
  // Metodos
  tienePatas() {
    return true
  }
  abstract sentarse(): void
}

class SillaModerna extends Silla {
  sentarse(): void {
    console.log('Juan hace uso de la silla moderna')
  }
}

class SillaVictoriana extends Silla {
  sentarse(): void {
    console.log('Juan hace uso de la silla victoriana')
  }
}

// --------------------------------------------------------------
abstract class Mesa {
  // Metodos
  abstract tienePatas(): boolean
  abstract comer(): void
}

class MesaModerna extends Mesa {
  tienePatas(): boolean {
    return true
  }
  comer(): void {
    console.log('Juan hace uso de la mesa moderna')
  }
}

class MesaVictoriana extends Mesa {
  tienePatas(): boolean {
    return true
  }
  comer(): void {
    console.log('Juan hace uso de la mesa victoriana')
  }
}

// --------------------------------------------------------------
abstract class Sofa {
  // Metodos
  abstract tienePatas(): boolean
  abstract recostarse(): void
}

class SofaModerno extends Sofa {
  tienePatas(): boolean {
    return true
  }
  recostarse(): void {
    console.log('Juan hace uso del sofa moderno')
  }
}

class SofaVictoriano extends Sofa {
  tienePatas(): boolean {
    return true
  }
  recostarse(): void {
    console.log('Juan hace uso del sofa victoriano')
  }
}

///////////////////////////////////////////////////////////////////////////////////

// este es el abstract factory (fabrica abstracta)
interface MueblesFactory {
  crearSilla(): Silla
  crearMesa(): Mesa
  crearSofa(): Sofa
}
// --------------------------------------------------------------
class MueblesModernosFactory implements MueblesFactory {
  crearSilla(): Silla {
    return new SillaModerna()
  }
  crearMesa(): Mesa {
    return new MesaModerna()
  }
  crearSofa(): Sofa {
    return new SofaModerno()
  }
}
// --------------------------------------------------------------
class MueblesVictorianosFactory implements MueblesFactory {
  crearSilla(): Silla {
    return new SillaVictoriana()
  }
  crearMesa(): Mesa {
    return new MesaVictoriana()
  }
  crearSofa(): Sofa {
    return new SofaVictoriano()
  }
}
