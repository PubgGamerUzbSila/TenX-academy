const Person = function (fname, lname, age) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
};

const komil = new Person("Komil", "Rasulov", 34);

console.log(komil);

Person.prototype.calcYear = function () {
  console.log(2023 - this.age);
};

const Student = function (fname, lname, age, course, level) {
  // this.fname = fname;
  // this.lname = lname;
  // this.age = age;
  Person.call(this, fname, lname, age);
  this.course = course;
  this.level = level;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.whenEnter = function () {
  // console.log(new Date().getFullYear() + 1 - this.level);
};
const bekzod = new Student("Bekzod", "Yusupov", 35, "ingliz");

//   console.log(bekzod);

bekzod.calcYear();
bekzod.whenEnter();

const CleverSt = function (grade, fname, lname, age, course, level) {
  Student.call(this, fname, lname, age, course, level);
  this.grade = grade;
};

CleverSt.prototype.gradeSt = function () {
  console.log(`${this.grade} == ${this.fname} o'quvchim `);
};
const Kamron = new CleverSt("Malades", "Shahboz", "Sattorov", 20, "IT", 2);
console.log(Kamron);
Kamron.gradeSt();
const Person = function (fname, lname, age) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
};

const komil = new Person("Komil", "Rasulov", 34);

console.log(komil);

Person.prototype.calcYear = function () {
  console.log(2023 - this.age);
};

const Student = function (fname, lname, age, course, level) {
  // this.fname = fname;
  // this.lname = lname;
  // this.age = age;
  Person.call(this, fname, lname, age);
  this.course = course;
  this.level = level;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.whenEnter = function () {
  console.log(new Date().getFullYear() + 1 - this.level);
};
const bekzod = new Student("Bekzod", "Yusupov", 35, "ingliz");

console.log(bekzod);

bekzod.calcYear();
bekzod.whenEnter();

const CleverSt = function (grade, fname, lname, age, course, level) {
  Student.call(this, fname, lname, age, course, level);
  this.grade = grade;
};

CleverSt.prototype.gradeSt = function () {
  console.log(`${this.grade} o'quvchi `);
};
const Kamron = new CleverSt("Malades", "Kamron", "Sattorov", 20, "IT", 2);
console.log(Kamron);
Kamron.gradeSt();
