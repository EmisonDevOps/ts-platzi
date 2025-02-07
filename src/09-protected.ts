export class Animal {
 hacerSonido(): void {
  console.log('Hacer sonido');
 }
}

export class Perro extends Animal {
 hacerSonido(): void {
  console.log('Waooof!');
 }
 ladrar(times: number): void {
  for (let index = 0; index < times; index++) {
   this.hacerSonido();
  }
 }
}

const myDog = new Perro();
myDog.hacerSonido();
myDog.ladrar(10);
