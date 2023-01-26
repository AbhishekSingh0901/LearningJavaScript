'use strict';

// //Default parameters

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassesngers = 1,
//   price = `$${100 * numPassesngers}`
// ) {
//   const booking = {
//     //enhanced object literals
//     flightNum,
//     numPassesngers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123', 5);

// //passing primitives vs reference as args

// const flight = 'BI777';
// const jonas = {
//   passengerName: 'Abhishek',
//   passport: 234567898775,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'BG999';
//   passenger.passengerName = 'Mr.' + passenger.passengerName;

//   if (passenger.passport === 234567898775) {
//     alert('checked in');
//   } else {
//     alert('Wrong passport');
//   }
//   console.log(flightNum);
//   console.log(passenger);
// };

// checkIn(flight, jonas);
// console.log(flight, jonas);

// //higher order funcitons, function accepting callback functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higer Order function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);
//   console.log(`TransformedBy: ${fn.name}`);
// };

// transformer('JavaScript is the best Programming language', upperFirstWord);
// transformer('JavaScript is the best Programming language', oneWord);

// //functions returning function:
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const hey = greet('Hey!');
// hey('Aru');

// greet('Hey!')('Abhishek');

// //using arrow
// const greetArrow = greeting => yourName =>
//   console.log(`${greeting} ${yourName}`);

// greetArrow('Hey!')('Abhishek');

// //call and Apply Methods
// const book = function (flightNum, name) {
//   console.log(
//     `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//   );
//   this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
// };

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   booking: [],
// };

// const emirates = {
//   airline: 'Emirates',
//   iataCode: 'EM',
//   booking: [],
// };

// book.call(lufthansa, 239, 'Abhishek');
// book.call(lufthansa, 238, 'Arushi');
// console.log(lufthansa);

// //aplly: we dont pass args directly we pass an array of args
// book.apply(lufthansa, [239, 'Abhishek']);

// //Bind method
// const bookEM = book.bind(emirates);
// const bookLh = book.bind(lufthansa);

// const bookEM23 = book.bind(emirates, 23); //this is known as partial application
// bookEM23('Abhishek');

// lufthansa.planes = 300;
// lufthansa.buyplane = function () {
//   this.planes++;
//   console.log(this);
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyplane.bind(lufthansa));

//challenge:
const addtax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat = addtax(0.23);
console.log(addVat(100));
