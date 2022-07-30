/*
Lecture 1:(assignment)

let country = "India";
let continent = "Asia";
let population = 125;
console.log(country, continent, population);


Lecture 2:
  //1.boolean

true;
console.log(false);
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof 56.4);
console.log(typeof javascriptIsFun);
javascriptIsFun = "YES!";
console.log(javascriptIsFun);

  //2. Undefined

let year;
console.log(year);
console.log(typeof year);
year = 1919;
console.log(year);
console.log(typeof year);


lecture 3:

let age = 30;
age = 35;

const birthYear = 1819;
birthYear = 34; //this will show an error. as const. cant be changed

var job = "gamer";
job = "memer"; //var and let look same but are pretty different. (learn in future)

lastName = "Singh";
console.log(lastName); //this is not used as undefined is stored as a global variable and not in that scope.


lecture 4:

const currentYear = 2022;
let yearOfBirth = 1969;

const age = currentYear - yearOfBirth;

console.log(age);

const firstName = "Arushi";
const lastName = "Singh";

console.log(firstName + " " + lastName);



Coding Challenge 1::::

let markHeight;
let markWeight;

let johnHeight;
let johnWeight;

markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;

const bmiMark = markWeight / markHeight ** 2;
const bmiJohn = johnWeight / johnHeight ** 2;
const markHigherBMI = bmiMark > bmiJohn;

console.log(
  "marks bmi = " +
    bmiMark +
    "\njohns bmi = " +
    bmiJohn +
    "\ngreateMark = " +
    markHigherBMI
);



lecture 6:


const myName = "Abhi";
const birthYear = 2000;
const year = 2022;
const job = "full stack Web Developer";

const aboutMe = `Hi i am ${myName}, a ${year - birthYear} year old ${job}`;

console.log(aboutMe + "😊❤️");



lecture 7:


const age = 19;

if (age >= 18) {
  console.log("Aru can start driving liscense 🏎️🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`you are too young wait another ${yearsLeft} years 🪶`);
}

coding challenge 2::::

let markHeight;
let markWeight;

let johnHeight;
let johnWeight;

markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;

const bmiMark = markWeight / markHeight ** 2;
const bmiJohn = johnWeight / johnHeight ** 2;
const markHigherBMI = bmiMark > bmiJohn;

if (bmiMark > bmiJohn) {
  console.log(`mark's BMI (${bmiMark}) is higher than john's (${bmiJohn})`);
} else if (bmiJohn > bmiMark) {
  console.log(`john's (${bmiJohn}) is higher than mark's BMI (${bmiMark})`);
} else {
  confirm.log(`both have same BMI`);
}


const money = 0;

if (money) {
  console.log("Aish kar !");
} else {
  console.log("ni kar payega rehne de 😂");
}




const age = 18;

const yourAge = Number(prompt("enter your age!"));
console.log(yourAge);
if (age === yourAge) console.log("You just became an adult!");




const hasDriversLiscence = true;
const hasGoodVision = false;

console.log(hasDriversLiscence && hasGoodVision);
console.log(hasDriversLiscence || hasGoodVision);




coding challenge 3::::

const scoreKoala = (96 + 108 + 89) / 3;
const scroreDolphins = (88, 91, 110) / 3;

if (scoreKoala > scroreDolphins && scoreKoala >= 100) {
  console.log("koala win!");
} else if (scroreDolphins > scoreKoala && scroreDolphins >= 100) {
  console.log("dolphins win!");
} else if (
  scoreKoala === scroreDolphins &&
  scoreKoala >= 100 &&
  scroreDolphins >= 100
) {
  console.log("tied");
} else {
  console.log("no one wins");
}



coding Challenge 4:::: 




const bill = Number(prompt(`Enter the bill amount: `));

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`bill value = ${bill} \ntip = ${tip}\ntotal = ${bill + tip}`);


*/
