// class Car {
//   constructor(model, speed, color) {
//     this.model = model;
//     this.speed = speed;
//     this.color = color;
//   }
//   speedUp() {
//     this.speed += 10;
//     console.log(
//       `${this.model} rusumli mashina, ${this.speed} tezligida yuryabti`
//     );
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(
//       `${this.model} rusumli mashina, ${this.speed} tezligida yuryabti`
//     );
//   }
// }
// class ElectroCar extends Car {
//   constructor(model, speed, color, charce) {
//     super(model, speed, color);
//     this.charce = charce;
//   }
//   speedUp() {
//     this.speed += 10;
//     this.charce -= 2;
//     console.log(
//       `${this.model} rusumli mashina, ${this.speed} tezligida yuryabti`
//     );
//     console.log(`${this.model} rusumli mashina, ${this.charce} zaryadi qoldi`);
//   }
//   brake() {
//     this.speed -= 5;
//     this.charce -= 1;
//     console.log(
//       `${this.model} rusumli mashina, ${this.speed} tezligida yuryabti`
//     );
//     console.log(`${this.model} rusumli mashina, ${this.charce} zaryadi qoldi`);
//   }
// }
// const CarBmw = new Car("bmw", 360, "red");
// console.log(CarBmw);
// CarBmw.brake();
// const ElectroCarBmw = new ElectroCar("bmwElectro", 500, "red", 100);
// console.log(ElectroCarBmw);
// ElectroCarBmw.brake();
