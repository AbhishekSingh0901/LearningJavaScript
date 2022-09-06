"use strict";

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  resName: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

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

  orderDelivery: function ({
    starterIndex = 1,
    mainindex = 0,
    time = "20;00",
    address,
  }) {
    console.log(
      `order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainindex]} will be deliverd to ${address} ,at  ${time}`
    );
  },

  order: function (starterIndex, mainindex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainindex]];
  },
};

//OBJECT DESTRUCTURING

restaurant.orderDelivery({
  time: "23:30",
  address: "SKD , GBU",
  mainindex: 2,
  starterIndex: 0,
});

const { resName, openingHours, categories } = restaurant;
// console.log(resName, openingHours, categories);
const {
  resName: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// console.log(restaurantName, hours, tags);

//setting Default Values:
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

//mutating Variables:
let a = 999;
let b = 122;
const obj = { a: 23, b: 7, c: 34 };
({ a, b } = obj);
console.log(a, b);

//Nested Destructuring:
const {
  fri: { open: o, close: c },
} = openingHours;
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
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// //same thing using destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, "and", mainCourse);

// //Example: IMPORTANT! nested destructuring
// const nested = [1, 3, [3, 4, 5]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // //Default values
// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);
