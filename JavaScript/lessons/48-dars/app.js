// // app.js 48-dars uchun

// const Car = function (model, speed, color) {
//     this.model = model;
//     this.speed = speed;
//     this.color = color;
// }

// Car.prototype.speedUp = function() {
//     this.speed+=10
//     console.log(`${this.model} mashinasi ${this.speed} km/h da yuradi`)
// }
// Car.prototype.brake = function(){
//     this.speed-=5
//     console.log(`${this.model} mashinasi ${this.speed} km/h da yuradi`)
// }
// const bmw = new Car('BMW', 360, "black");

// bmw.brake()
// let Car =  class{
//     constructor(model, speed, color) {
//         this.model = model;
//         this.speed = speed;
//         this.color = color;
//     }

//     speedUp() {
//         this.speed += 10;
//         console.log(`${this.model} mashinasi ${this.speed} km/h da yuradi`);
//     }

//     brake() {
//         this.speed -= 5;
//         console.log(`${this.model} mashinasi ${this.speed} km/h da yuradi`);
//     }
// }

// const bmw = new Car('BMW', 360, "black");
// bmw.brake();

class Car {
    constructor(model, speed, color) {
        this.model = model;
        this.speed = speed;
        this.color = color;
    }

    speedUp() {
        this.speed += 10;
        console.log(`${this.model} mashinasi ${this.speed} km/h da yuradi`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.model} mashinasi ${this.speed} km/h da yuradi`);
    }
}

const bmw = new Car('BMW', 360, "black");

bmw.brake();