const Animal = function (name, age) {
  //   this.type = type;
  this.name = name;
  this.age = age;
};
const Quruqlik = function (name, age, quruqlik) {
  Animal.call(this, name, age);
  this.quruqlik = quruqlik;
};
Quruqlik.prototype = Object.create(Animal.prototype);
const Suv = function (name, age, suv) {
  Animal.call(this, name, age);
  this.suv = suv;
};
Suv.prototype = object.create(Animal.prototype)
const Quruqlik = function (name, age, quruqlik) {
    Animal.call(this, name, age);
    this.quruqlik = quruqlik;
  };
  