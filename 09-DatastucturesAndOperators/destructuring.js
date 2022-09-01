"use strict";

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainindex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainindex]];
  },

  orderDelivery: function ({ starterIndex, mainindex, time, address }) {
    console.log(
      `order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainindex]} will be delivered to ${address}  at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//OBJECT DESTRUCTURING

// const { name, openingHours, categories } = restaurant;
// console.log(name, "\n", openingHours, "\n", categories);
restaurant.orderDelivery({
  time: "23:30",
  address: "Gbu",
  mainindex: 2,
  starterIndex: 2,
});

const {
  name: restaurantName,
  openingHours: hours,
  categories: task,
} = restaurant;

console.log(restaurantName, hours, task);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variable:
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//nested object Destructuring

const {
  fri: { open: o, close: c },
} = hours;
console.log(o, c);

// //example: ARRAY DESTRUCTURING
// const arr = [1, 2, 3];
// //destructuring
// const [a, b, c] = arr;
// console.log(a, b, c);
// //destructuring does not affect the original array
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //now if want to switch main and secondary variables:
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// //same thing using destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, "and", mainCourse);

// //Example: IMPORTANT! nested destructuring
// const nested = [1, 3, [3, 4, 5]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
