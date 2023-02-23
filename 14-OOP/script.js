'use strict';

//Contructor function
const Person = function (fullName, birthyear) {
  // Instance properties
  this.fullName = fullName;
  this.birthyear = birthyear;

  // ! BAD PRACTICE
  // You should never to this,
  this.calcAge = function () {
    console.log(2023 - this.birthyear);
  };
};

//Prototypes: each and every function in JS automatically has a property called prototype
//prototype of linked objects
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthyear);
};

// console.log(Person.prototype);

const jonas = new Person('Jonas', 1991);
const matlida = new Person('matilda', 2000);
// console.log(jonas);
// console.log(matlida);

// Person.hey = function () {
//   console.log(`Hey There 😒`);
// };

// Person.hey();
// console.log(Person);
// jonas.calcAge();
//1. a new empty object is created
//2. function is called, this = object
//3. this object is linked to a prototype
//4. function automatically return

// console.log(jonas instanceof Person); //true

// const jay = 'jay';
// console.log(jay instanceof Person);

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas, matlida);
// console.log(jonas.species, matlida.species); //homo Sapiens
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

//*Protypal inheritence: on built in  Objetcs

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);
// const arr = [2, 3, 5, 4, 55, 8, 6, 55, 3]; //new Array = []
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

//this is generallly not a good idea: DONT do it Practically!
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);

//////////////////////////////////////////////////////////////////////////////////

//ES6 Classes

//Insatance methods
class PersonCL {
  constructor(fullName, birthyear) {
    this.fullName = fullName;
    this.birthyear = birthyear;
  }

  calcAge() {
    console.log(`${this.fullName}'s age is ${2023 - this.birthyear}`);
  }

  get age() {
    return 2023 - this.birthyear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static sayhi() {
    console.log(`Hey There 😒`);
  }
}

const JohnDoe = new PersonCL('John Doe', 1986);
// console.log(JohnDoe);
// console.log(JohnDoe.age);
// JohnDoe.calcAge();
// JohnDoe.calcAge();

PersonCL.prototype.greet = function () {
  console.log(`hey ${this._fullName}`);
};

JohnDoe.greet();
PersonCL.sayhi();
// JohnDoe.sayhi();

// const walter = new PersonCL('walter', 1965);
// console.log(walter);

//Getters and Setter:
// const account = {
//   owner: 'Jonas',
//   movements: [100, 200, 456, 842],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// console.log((account.latest = 500));
// console.log(account.movements);
////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #1

// Your tasks:

// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them

// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

//Solution:

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   console.log(`speed: ${(this.speed += 10)}km/h`);
// };

// Car.prototype.brake = function () {
//   console.log(`speed: ${(this.speed -= 5)}km/h`);
// };

// const car1 = new Car('BMW', 120);
// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.accelerate();
// car1.brake();
// car1.brake();
