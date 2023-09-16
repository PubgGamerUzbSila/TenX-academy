// 47-dars start

// Object literal
// const person = {
//     firstName: 'Kamronbek',
//     lastName: 'Sattorov',
//     age: 50,
// }

const Person = function(firstName, lastName, age){
    // console.log(this)
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    // this.calcYear = function(){
    //     console.log(2023 - age);
    // }
}

const res = new Person('Komil','Rasulov', 56);
const res1 = new Person('Kasa','Rasufsdfslov', 46);
const res2 = new Person('asdsd','hjjgjg', 12);
Person.prototype.calcYear = fucntion() {
    console.log(2023 - this.age)
}
console.log(res)
console.log(res1)
console.log(res2)

res.calcYear();
res1.calcYear();
res2.calcYear();


// 1.Bo'sh {} yaratiladi
// 2.this yangi ochilgan bo'sh {} ga o'zlashadi va Function ishlaydi.
// 3. Objectimiz protorype bog'lanadi.
// 4. O'sha Object return bo'ladi.



// 47-dars end