'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [[weekdays[5]]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //*ES enhanced object literals
  openingHours,

  orderDelivery(
    {
      starterIndex = 1,
      mainIndex = 0,
      time = '20:00',
      address,
    } /*these curly braces are really important for destructuring the object*/
  ) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Heres is your delicious pasta with ${ing1}, ${ing2} and ${ing3} is getting prepared!`
    );
  },

  orderPizza(mianIngredient, ...otherIngridients) {
    console.log(mianIngredient);
    console.log(otherIngridients);
  },
};

// const arr = [7, 8, 9];
// //using spread operator
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// console.log([...restaurant.mainMenu, "Chhole"]);

// //use case 1 - Creating Shallow copies
// const mainMenuCopy = [...restaurant.mainMenu];

// //use case 2 - join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //works on all iterables:
// const str = "Abhishek";
// const letters = [...str];
// console.log(letters);

// // const ingridients = [
// //   prompt(`let\'s make pasta! Ingridient 1?`),
// //   prompt(`Ingridient 2?`),
// //   prompt(`Ingridient 3?`),
// // ];

// // console.log(ingridients);

// // restaurant.orderPasta(...ingridients);

// //recently we can also use it in //*obects*/
// const newRestaurant = { foundIn: 1986, ...restaurant, founder: "kirodimal" };
// console.log(newRestaurant);

// //proof that it makes copies and not points to the same object:
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Roma Romante";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//*Using rest pattern:

// //Destructuring
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [Pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(Pizza, Risotto, otherFood);

// //using these in objects:
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //Fucntion
const add = function (...numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 4, 2);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("mushrooms", "onions", "corn", "cheese");

//* Short Circuiting

console.log('-----OR-----');
console.log(3 || 'jonas'); //3
console.log('' || 'Jonas'); //jonas
console.log(true || 0); //true
console.log(undefined || null); //null

restaurant.numGueast = 0;
const guests = restaurant.numGueast ? restaurant.numGueast : 10;
console.log(guests);
//another example of short circuiting
const guests2 = restaurant.numGueast || 10;
console.log(guests2);
//*correcting te above issue of guest2 returning 10 but it should be returning 0 using NULLISH operator (??)
//Nullish values - null and undefiens
const guestsCorrect = restaurant.numGueast ?? 10;
console.log(guestsCorrect);

/////////////////////////////////////////
console.log('-----AND-----');

console.log(3 && 'jonas'); //jonas
console.log('' && 'Jonas'); //
console.log(true && 0); //0
console.log(undefined && null); //undefined

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
//another use case of short circuiting
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//* Logical Assignment operators
const rest1 = {
  name: 'capri',
  numGuests: 0,
};

const rest2 = {
  name: 'la Piazza',
  owner: 'Giovanni Rossi',
};

//Logical OR aassignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

console.log(rest1); // 10 we have an issue here 0 is a falsy value due to which rest1.numguest is being assigned 10 too
console.log(rest2); //10 correct because in rest2 numguest does not exist

//overcoming the above problem nullish operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
// console.log(rest1);
// console.log(rest2);

//Logical AND assignment operator:

rest2.owner &&= '<ANONYMOUS>';
console.log(rest2);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  //destructuring is used
  console.log(`${i + 1}: ${el}`);
}

//*        Optional Chaining        //
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}

//using with Methods
console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'method does not exist');

//Looping Objects
const entries = Object.entries(openingHours);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open}, and close at ${close}`);
}

//Working with Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

function addmystr(str) {
  return 'no ' + str;
}
ordersSet.add('Fetuchinni');
ordersSet.delete('Risotto');
ordersSet.has('Pizza');

const letters = new Set(['a', 'b', 'c']);
// List all entries
let text = '';
letters.forEach(function (value) {
  text += value;
});
console.log(text);

//Working with Maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'TRK');
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
console.log(rest.get(true));
const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close'));

const question = new Map([
  ['question', 'What is the best language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct🎖️'],
  [false, 'Wrong😒'],
]);

// console.log(question.get('question'));
// for (let [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const answer = Number(prompt('Your Answer!'));
// alert(question.get(answer === question.get('correct')));

//Map to an Array
console.log([...question]);
