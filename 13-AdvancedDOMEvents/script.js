'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

console.log(btnsOpenModal);
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// 1) Selecting,reating, and Deleting Elements:

//! selecting

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); //Returns a node list.
console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button'); //Returns an Html collection(live collection),
console.log(allButtons); //i.e. if dom changes it gets updated automatically

console.log(document.getElementsByClassName('btn')); //Also return Html Collection

//! Creating

//.inserAdjacentHtml

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We use cookies for improved functionality and antalytics.
<button class = "btn btn--close-cookie">Got it</button>`;
header.prepend(message); //fisrt child element inside header;
// header.append(message); // last child element inside header;

// header.append(message.cloneNode(true)); //*cloning the messsage element at both places;

header.before(message);
// header.after(message);

//! Deleting
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); //Deletes the element;
    // message.parentElement.removeChild(message) //*older way of deleting;
  });
