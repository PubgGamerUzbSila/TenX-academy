const Car = function (model, speed, color, turi) {
  this.model = model;
  this.speed = speed;
  this.color = color;
  this.turi = turi;
};

Car.prototype.speedUp = function (zaryad) {
  this.speed += 10;
  if (this.turi == true) {
    zaryad -= 2;
    console.log(`Uning zaryadi hozir ${zaryad}%`);
  }
  console.log(`${this.model} mashinasi ${this.speed} km/h da yuradi`);
};
Car.prototype.brake = function (zaryad) {
    if (this.turi == true) {
        zaryad -= 1;
        console.log(`Uning zaryadi hozir ${zaryad}%`);
      }
  this.speed -= 5;
  console.log(`${this.model} mashinasi ${this.speed} km/h da yuradi`);
};
const bmw = new Car("BMW", 360, "black", true);
bmw.brake(100);
