"use strict";

// //practice Scoping:

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;
//   function printAge() {
//     const output = `hi ${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `yes you are a millenial ${firstName}`;
//       console.log(str);
//       var millenial = true;
//     }
//     //var is function scoped::
//     console.log(millenial);
//   }
//   printAge();

//   return age;
// }
// calcAge(1983);
// var firstName = "Abhi";

// // TDZ - temporal death Zone and Hoisting

// console.log(me);
// console.log(job);
// console.log(year);

// var me = "abhi";
// let job = "Student";
// const year = 2022;

// //functions

// console.log(addDec(2, 3));
// // console.log(addExpr(2, 3));
// console.log((addArr = 2));
// console.log(addArr(2, 3));
// function addDec(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArr = (a, b) => a + b;

//this keyword in practice.

// console.log(this);

const calcAge = () => console.log(this);

calcAge();

//reference types

const me = {
  firtName: "Abhi",
  secondName: "Singh",
  age: 21,
};

const newMe = Object.assign({}, me);

newMe.age = 22;

console.log(me);
console.log(newMe);
