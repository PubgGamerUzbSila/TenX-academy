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
    this.calcYear = function(){
        console.log(2023 - age);
    }
}

const res = new Person('Komil','Rasulov', 56);
console.log(res)

// 1.Bo'sh {} yaratiladi
// 2.this yangi ochilgan bo'sh {} ga o'zlashadi va Function ishlaydi.
// 3. Objectimiz protorype bog'lanadi.
// 4. O'sha Object return bo'ladi.



// 47-dars end