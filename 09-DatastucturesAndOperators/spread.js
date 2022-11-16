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

  orderDelivery: function (
    {
      starterIndex = 1,
      mainIndex = 0,
      time = "20:00",
      address,
    } /*these curly braces are really important for destructuring the object*/
  ) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Heres is your delicious pasta with ${ing1}, ${ing2} and ${ing3} is getting prepared!`
    );
  },
};

const arr = [7, 8, 9];
//using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

console.log([...restaurant.mainMenu, "Chhole"]);

//use case 1 - Creating Shallow copies
const mainMenuCopy = [...restaurant.mainMenu];

//use case 2 - join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//works on all iterables:
const str = "Abhishek";
const letters = [...str];
console.log(letters);

// const ingridients = [
//   prompt(`let\'s make pasta! Ingridient 1?`),
//   prompt(`Ingridient 2?`),
//   prompt(`Ingridient 3?`),
// ];

// console.log(ingridients);

// restaurant.orderPasta(...ingridients);

//recently we can also use it in //*obects*/
const newRestaurant = { foundIn: 1986, ...restaurant, founder: "kirodimal" };
console.log(newRestaurant);

//proof that it makes copies and not points to the same object:
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Roma Romante";
console.log(restaurantCopy.name);
console.log(restaurant.name);
