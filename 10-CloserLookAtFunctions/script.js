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

//Challenge 1:
/*Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an 
array with the number of replies for each option. This data is stored in the starter 
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things:
1.1. Display a prompt window for the user to input the number of the 
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For 
example, if the option is 3, increase the value at position 3 of the array by 
1. Make sure to check if the input is a number and if the number makes 
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
object! So what should the this keyword look like in this situation?
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const reply = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')} (Write option number)`
      )
    );
    console.log(reply);

    if (typeof reply === 'number' && reply < this.answers.length)
      this.answers[reply]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`the Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
