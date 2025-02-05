interface Address {
  calle: string;
  pais: string;
  ciudad: string;
}

interface SuperHeroe {
  nombre: string;
  edad: number;
  direccion: Address;
  mostrarDireccion: () => string;
}

const superHeroe: SuperHeroe = {
  nombre: 'Spiderman',
  edad: 30,
  direccion: {
    calle: 'Main St',
    pais: 'USA',
    ciudad: 'NY'
  },
  mostrarDireccion() {
    return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
  }
};

console.log(superHeroe.mostrarDireccion());