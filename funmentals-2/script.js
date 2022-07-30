"use strict";

/*
let hasDriverLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true;
if (hasDriverLicence) console.log("this driver can drive");



function logger() {
  console.log("my name is Jonas");
}

calling , running / invoking a function
logger();

const numapples = Number(prompt(`how many apples?`));
const numoranges = Number(prompt(`how many oranges?`));

the exaple of funstion declaration:

function fruitProcessor(Numapples, Numoranges) {
  const juice = `juice with ${Numapples} apples, and ${Numoranges} aranges.`;
  return juice;
}

const juiceNeeded = fruitProcessor(numapples, numoranges);
console.log(juiceNeeded);

the example of function expression:

const juiceNeeded2 = function (Numapples, Numoranges) {
  const juice = `juice with ${Numapples} apples, and ${Numoranges} aranges.`;
  return juice;
};

const juiceMade = juiceNeeded2(numapples, numoranges);
console.log(juiceMade);


Arrow function:


const calcRetirement = (birth) => {
  const ageCalc = 2022 - birth;
  const retirement = 65 - ageCalc;
  return retirement;
};
const age = calcRetirement(2000);
console.log(age);



challenge 1 :::



const calcAverage = (score_1, score_2, score_3) =>
  (score_1 + score_2 + score_3) / 3;

const averageKoala = calcAverage(150, 130, 20);
const averageDolphins = calcAverage(44, 23, 71);
console.log(averageDolphins, averageKoala);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgKoalas >= avgDolphins * 2) {
    console.log(`kolalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log("NO one wins");
  }
};

checkWinner(averageDolphins, averageKoala);


VERRYYYY IMPORTANTTT:::::
ARRAYS:

const friends = ["Aru", "yash", "Jatin"];
console.log(friends[0]);

const years = new Array(1234, 1233, 1232);
console.log(years);

Exercise:


const calcAge = function (birhtYear) {
  return 2022 - birhtYear;
};

const years = [1990, 1967, 2000, 2003];

const age = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[3]),
];

console.log(age);


challenge 2:::

const calcTip = function (bill) {
  const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
  return tip;
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);


objects :::


const id = {
  firstName: "Abhishek",
  lastName: "Singh",
  birthYear: 2000,
  job: "Programmer",
  friends: ["Aru", "Yash", "Jatin"],

  calcAge: function () {
    return 2022 - this.birthYear;
  },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  licence: function () {
    if (this.age >= 18) {
      this.hasDriversLicense = true;
      return "he has a drivers lisence";
    } else {
      this.hasDriversLicence = false;
      return "he not have a lisence";
    }
  },
};

console.log(id.firstName);
console.log(id["lastName"]);

const nameKey = "Name";
console.log(id["first" + nameKey]);

const need = prompt(
  "What do you wannt to get from id choose between firstName, lastName, age , friends"
);

if (id[need]) {
  console.log(id[need]);
} else {
  console.log(`id does not exist`);
}

id.location = "India";
id["social"] = "as@9284608@gmail.com";

console.log(id);
console.log(
  `${id.firstName} has ${id.friends.length} friends, and his best friend is called ${id.friends[0]}`
);
console.log(
  `${id.firstName} is a ${id.calcAge()} old ${id.job}, and ${id.licence()}`
);

challenge 3::::


const johnsWeight = Number(prompt(`enter john's wieght!!`));
const johnsHieght = Number(prompt(`Enter john's height (in meters)!`));

const marksWeight = Number(prompt(`enter Mark's wieght!!`));
const marksHieght = Number(prompt(`Enter Mark's height (in meters)!`));

const marksId = {
  fullName: "Marks Spencer",
  weight: marksWeight,
  height: marksHieght,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

const johnsId = {
  fullName: "John Doe",
  weight: johnsWeight,
  height: johnsHieght,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

marksId.calcBMI();
johnsId.calcBMI();

if (marksId.bmi > johnsId.bmi) {
  console.log(
    `mark's BMI (${marksId.bmi}) is higher than john's (${johnsId.bmi})`
  );
} else if (johnsId.bmi > marksId.bmi) {
  console.log(
    `mark's BMI (${marksId.bmi}) is lesser than john's (${johnsId.bmi})`
  );
}

*/

for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weight repetition ${i} 🏋️`);
}

const id = ["Abhishek", "Singh", 379, ["aru", "yash"], true, "dream"];
const type = [];
for (let i = 0; i < id.length; i++) {
  console.log(id[i]);
  type.push(typeof id[i]);
}
console.log(type);

//continue and break statement:

/*ONLY STRINGS - continue statments says that if the condition
is true then continue to the next iteration.*/

for (let i = 0; i < id.length; i++) {
  if (typeof id[i] !== "string") continue;

  console.log(id[i], typeof id[i]);
}

/*BREAK AFTER GETTING NUMBER - break statment breaks the loops i.e.
stops the loop as soon as the condition is fulfilled*/

console.log("__BREAK STATEMENT__");
for (let i = 0; i < id.length; i++) {
  if (typeof id[i] === "number") break;

  console.log(id[i], typeof id[i]);
}
