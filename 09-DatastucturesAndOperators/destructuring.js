"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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

//Destructurig Arrays
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);

const [first, , third] = restaurant.categories;
console.log(first, third);

//aonther use case:
let [firtStarter, secondStarter] = restaurant.starterMenu;
console.log(firtStarter, secondStarter);
[firtStarter, secondStarter] = [secondStarter, firtStarter];
console.log(firtStarter, secondStarter);

console.log(restaurant.order(2, 0));

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//in case of nested array

const nested = [2, 3, [4, 5]];
const [i, , j] = nested;
const [m, , [n, o]] = nested;

console.log(i, j, m, n, o);

//default values
const myarr = [4, 2];
const [f = 1, , g = 1] = myarr;
console.log(f, g);
