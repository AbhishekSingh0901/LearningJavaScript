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

const request = fetch(`https://restcountries.com/v2/name/portugal`);
console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(error => console.error(`${error} 🚫🚫🚫`));
};
btn.addEventListener('click', function () {
  getCountryData('usa');
});
