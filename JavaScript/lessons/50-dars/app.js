class Person {
  constructor(fname, age) {
    this.fname = fname;
    this.age = age;
  }
  calcYear() {
    console.log(2023 - this.age);
  }
  eat() {
    console.log("Ovqat yeydi");
  }
}

// const komil = new Person('komil', 15)
// console.log(komil)

class Student extends Person {
  constructor(fname, age, course) {
    super(fname, age);
    this.course = course;
  }
  goCourse() {
    console.log(`${this.fname} ${this.course} to'garagiga boradi.`);
  }
  eat() {
    console.log("Ovqatlanmaydi");
  }
}

const kamron = new Student("kamron", 12, "IT");
console.log(kamron);
kamron.eat();
