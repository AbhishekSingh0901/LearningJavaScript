console.log('Exporting module');

// const shippingCost = 10;
export const cart = [];

//Blocking Code
// console.log('Start fetching Users');
// await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log('finish fetching');

// export const addToCart = function (product, quantity) {
//   card.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// };

// const totalPrice = 237;
// const totalQuantity = 23;

// export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
