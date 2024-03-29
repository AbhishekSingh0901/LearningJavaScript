'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     // console.log(data);
//     // console.log(data.flags.svg);
//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(2)} Mil people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(2)} Mil people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// const getCountryDataAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // console.log(data.flags.svg);
//     renderCountry(data);

//     //Get Neighbour country:

//     const neighbour = data.borders[0];
//     if (!neighbour) return;
//     const nieghbourRequest = new XMLHttpRequest();
//     nieghbourRequest.open(
//       'GET',
//       `https://restcountries.com/v2/alpha/${neighbour}`
//     );
//     nieghbourRequest.send();
//     nieghbourRequest.addEventListener('load', function () {
//       const datanighobur = JSON.parse(this.responseText);
//       renderCountry(datanighobur, 'neighbour');
//     });
//   });
// };

// getCountryDataAndNeighbour('usa');

// //Another simpler Example:
// setTimeout(() => {
//   console.log('1 Sec passed');
//   setTimeout(() => {
//     console.log('1 Sec passed');
//     setTimeout(() => {
//       console.log('1 Sec passed');
//       setTimeout(() => {
//         console.log('1 Sec passed');
//         setTimeout(() => {
//           console.log('1 Sec passed');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

// const request = fetch(`https://restcountries.com/v2/name/portugal`);
// console.log(request);

const getJSON = function (url, errorMSG = 'Something went wrong') {
  return fetch(url).then(response => {
    // console.log(response);
    if (!response.ok) {
      throw new Error(`${errorMSG} (${response.status}) `);
    }
    return response.json();
  });
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Country ${country} not found (${response.status}) `);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(error => {
//       console.error(`${error} 🚫🚫🚫`);
//       rederError(`Something went wrong🚫 ${error.message}. Try again`);
//     })
//     .finally(() => {
//       // console.log(`lalalalala`);
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       console.log(neighbour);
//       if (!neighbour) throw new Error('No nieghbour found!🏝️');

//       //country 2;
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(error => {
//       console.log(`${error} 🚫`);
//       renderError(`Something went wrong🚫 ${error.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

/**
 * Coding Challenge #1
In this challenge you will build a function 'whereAmI' which renders a country 
only based on GPS coordinates. For that, you will use a second API to geocode 
coordinates. So in this challenge, you’ll use an API on your own for the first time �
Your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat') 
and a longitude value ('lng') (these are GPS coordinates, examples are in test 
data below).
2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means 
to convert coordinates to a meaningful location, like a city and country name. 
Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call 
will be done to a URL with this format: 
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and 
promises to get the data. Do not use the 'getJSON' function we created, that 
is cheating �
3. Once you have the data, take a look at it in the console to see all the attributes 
that you received about the provided location. Then, using this data, log a 
message like this to the console: “You are in Berlin, Germany”
4. Chain a .catch method to the end of the promise chain and log errors to the 
console
5. This API allows you to make only 3 requests per second. If you reload fast, you 
will get this error with code 403. This is an error with the request. Remember, 
fetch() does not reject the promise in this case. So create an error to reject 
the promise yourself, with a meaningful error message

PART 2
6. Now it's time to use the received data to render a country. So take the relevant 
attribute from the geocoding API result, and plug it into the countries API that 
we have been using.
7. Render the country and catch any errors, just like we have done in the last 
lecture (you can even copy this code, no need to type the same code)
The Complete JavaScript Course 31
Test data:
§ Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
§ Coordinates 2: 19.037, 72.873
§ Coordinates 3: -33.933, 18.474
GOOD LUCK �

 */

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=136567894980043431541x66720`
//   )
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`you are in ${data.city}, ${data.country}`);

//       return fetch(
//         `https://restcountries.com/v2/name/${data.country.toLowerCase()}`
//       );
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(error => console.log(error.message));
// };
// // const currLocation = navigator.geolocation.getCurrentPosition();
// // console.log(currLocation);

// // whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);
// btn.addEventListener('click', function () {
//   // getCountryData('australia');
//   // getCountryData('britain');
//   whereAmI(-33.933, 18.474);
// });

// console.log('Test Start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('resoloved promise 1').then(res => console.log(res));
// Promise.resolve('resoloved promise 2').then(res => {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(res);
// });
// console.log('Test End');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`lottery ticket bought`);
//   setTimeout(function () {
//     if (Math.random() > 0.5) {
//       resolve(`You Win 🎖️`);
//     } else {
//       reject(new Error(`You lost your money!`));
//     }
//   }, 1000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying set-timout
// const wait = function (sec) {
//   return new Promise(resolove => {
//     setTimeout(resolove, sec * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log(`1 sec passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`i waited for 2 sec`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`i waited for 3 sec`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`i waited for 4 sec`);
//     return wait(1);
//   });

// //promise.reolve, promise.reject

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('prblem!')).then(x => {
//   console.error(x);
// });

const getPostion = function () {
  return new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   position => res(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPostion()
//   .then(pos => console.log(pos))
//   .catch(err => console.error(err));
// console.log('getting position');

// const whereAmI = function () {
//   getPostion()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=136567894980043431541x66720`
//       );
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`you are in ${data.city}, ${data.country}`);

//       return fetch(
//         `https://restcountries.com/v2/name/${data.country.toLowerCase()}`
//       );
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(error => console.log(error.message));
// };

// btn.addEventListener('click', function () {
//   whereAmI();
// });

// Coding Challenge #2

// For this challenge you will actually have to watch the video! Then, build the image
// loading functionality that I just showed you on the screen.

// Your tasks:
// Tasks are not super-descriptive this time, so that you can figure out some stuff by
// yourself. Pretend you're working on your own �

// PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input.
// This function returns a promise which creates a new image (use
// document.createElement('img')) and sets the .src attribute to the
// provided image path
// 2. When the image is done loading, append it to the DOM element with the
// 'images' class, and resolve the promise. The fulfilled value should be the
// image element itself. In case there is an error loading the image (listen for
// the'error' event), reject the promise
// 3. If this part is too tricky for you, just watch the first part of the solution

// PART 2
// 4. Consume the promise using .then and also add an error handler
// 5. After the image has loaded, pause execution for 2 seconds using the 'wait'
// function we created earlier
// 6. After the 2 seconds have passed, hide the current image (set display CSS
// property to 'none'), and load a second image (Hint: Use the image element
// returned by the 'createImage' promise to hide the current image. You will
// need a global variable for that �)
// 7. After the second image has loaded, pause execution for 2 seconds again
// 8. After the 2 seconds have passed, hide the current image

// Test data: Images in the img folder. Test the error handler by passing a wrong
// image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
// otherwise images load too fast

// const imgContainer = document.querySelector('.images');
// const wait = function (sec) {
//   return new Promise(resolove => {
//     setTimeout(resolove, sec * 1000);
//   });
// };
// const createImage = function (imgPath) {
//   return new Promise((resolve, reject) => {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image cannot be loaded'));
//     });
//   });
// };

// let currImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currImg = img;
//     console.log('img loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currImg = img;
//     console.log('img loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// const whereAmI = async function () {
//   try {
//     const posRes = await getPostion();
//     const { latitude: lat, longitude: lng } = posRes.coords;
//     const geoRes = await fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json&auth=136567894980043431541x66720`
//     );

//     if (!geoRes.ok) {
//       throw new Error(`Problem with getting location data`);
//     }

//     const datageo = await geoRes.json();
//     // console.log(datageo);
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${datageo.country.toLowerCase()}`
//     );

//     const data = await res.json();
//     // console.log(data);
//     renderCountry(data[0]);

//     return `You are in ${datageo.city}, ${datageo.country}`;
//   } catch (err) {
//     console.error(err);
//     renderError(` ${err.message}`);

//     //Reject promise returned from asyncfunction
//     throw err;
//   }
// };

// console.log('1: will get Location');
// whereAmI();
// console.log('2: Finished getting Location');
// btn.addEventListener('click', () => whereAmI());

// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting Location'));

// (async function () {
//   try {
//     const position = await whereAmI();
//     console.log(position);
//   } catch (err) {
//     console.log(err.message);
//   }
//   console.log('finished getting location');
// })();

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);
//     console.log(data);
//     console.log(data.map(datacity => datacity[0].capital));
//   } catch (err) {}
// };

// get3Countries('portugal', 'usa', 'bharat');

//Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/usa`),
    getJSON(`https://restcountries.com/v2/name/bharat`),
    getJSON(`https://restcountries.com/v2/name/russia`),
  ]);
  console.log(res[0].name);
})();

//Promise.allSettled

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success'),
  Promise.resolve('Success'),
  Promise.reject('Error'),
]).then(res => console.log(res));

//Promise.any [ES2021]

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success'),
  Promise.resolve('Success'),
  Promise.reject('Error'),
]).then(res => console.log(res));
