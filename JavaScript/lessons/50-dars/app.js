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

// class Student extends Person {
//   constructor(fname, age, course) {
//     super(fname, age);
//     this.course = course;
//   }
//   goCourse() {
//     console.log(`${this.fname} ${this.course} to'garagiga boradi.`);
//   }
//   eat() {
//     console.log("Ovqatlanmaydi");
//   }
// }

// const kamron = new Student("kamron", 12, "IT");
// console.log(kamron);
// kamron.eat();

class Account {
  bank = "Kapital";
  _password;
  #cardnumber
  constructor(fname, lname, login, password, cardnumber) {
    this.fname = fname;
    this.lname = lname;
    this.login = login;
    this.password = password;
    this.#cardnumber = cardnumber;
  }
  getPassword() {
    return this.password;
  }
  setPassword(parol) {
    this._password = parol;
  }
}
// const abduhakimKot = new Account('kotBola','chichqoq',"ko'tvacha",1111,8600_1402_3445_2321)

const komil = new Account("komil", "rasulov", "kr", 1111, 8600_1402_3445_2321);
console.log(komil);
console.log(komil.getPassword())
komil.setPassword(9999)
console.log(komil.getPassword())
