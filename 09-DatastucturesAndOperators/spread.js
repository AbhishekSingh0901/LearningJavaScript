"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
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
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //*ES enhanced object literals
  openingHours,

  orderDelivery(
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
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i in numbers) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 4, 2);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("mushrooms", "onions", "corn", "cheese");
