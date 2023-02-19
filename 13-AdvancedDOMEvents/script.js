'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Modal window

// console.log(btnsOpenModal);
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

//*Event Delegation

//Page Navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     // console.log('LINK');
//     const id = this.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//*Implementing the Smooth Scrolling:

btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('current scroll (X/Y)', window.pageXOffset, pageYOffset);

  // console.log(
  //   'height/Width of viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //*Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  //making the scolling on click smooth

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //More MordernWay:
  section1.scrollIntoView({ behavior: 'smooth' });
});

//* Building tabbed Components:

tabContainer.addEventListener('click', function (e) {
  e.preventDefault();

  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  //Guard Clause
  if (!clicked) return;

  //active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');

  //activate-content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//*menu fade animation:

const handleHover = function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//*sticky navigation

//window scroll should be avoided usually
const initialCorrds = section1.getBoundingClientRect();
console.log(initialCorrds);

window.addEventListener('scroll', function (e) {
  if (window.scrollY > initialCorrds.top) {
    nav.classList.add('sticky');
  } else nav.classList.remove('sticky');
});
//////////////////////////////////////////////////////////////////
// 1) Selecting,reating, and Deleting Elements:

//* selecting

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section'); //Returns a node list.
// console.log(allSections);

// document.getElementById('section--1');

// const allButtons = document.getElementsByTagName('button'); //Returns an Html collection(live collection),
// console.log(allButtons); //i.e. if dom changes it gets updated automatically

// console.log(document.getElementsByClassName('btn')); //Also return Html Collection

// //* Creating

// //.inserAdjacentHtml

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = `We use cookies for improved functionality and antalytics.
// <button class = "btn btn--close-cookie">Got it</button>`;
// // header.prepend(message); //fisrt child element inside header;
// header.append(message); // last child element inside header;

// // header.append(message.cloneNode(true)); //*cloning the messsage element at both places;

// // header.before(message);
// // header.after(message);

// //* Deleting
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove(); //Deletes the element;
//     // message.parentElement.removeChild(message) //*older way of deleting;
//   });

// //2) Styles, Attributes and classes:

// //* styles: these styles are added as inline styles
// message.style.backgroundColor = '#37383d';
// // message.style.width = '120%';
// message.style.margin = '10px';

// //to get all the style: even though we did not apply it
// console.log(getComputedStyle(message).height);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// // document.documentElement.style.setProperty('--color-primary', 'red');
// // document.documentElement.style.setProperty(
// //   '--gradient-primary',
// //   'linear-gradient(to top left, #ffb003, #ffcb03)'
// // );

// //*Attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// logo.alt = 'Beautiful minimal logo';

// //non-standard
// console.log(logo.designer); //will return undefined
// console.log(logo.getAttribute('designer'));

// //opposite of get Attribute:
// logo.setAttribute('developer', 'bazinga');

// console.log(logo.src); //returns absolute URL
// console.log(logo.getAttribute('src')); //returns relative URL

// const twitterLink = document.querySelector('.twitter-link');
// //both of them are absolute anyway so returns absolute
// console.log(twitterLink.href);
// console.log(twitterLink.getAttribute('href'));

// //Data attributes:
// console.log(logo.dataset.versionNumber);

// Classes:

// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

//*Types of Events and Event Handlers
// const h1 = document.querySelector('h1');

//addevent listener  1. allows us to add multiple event listeners to same event
//2. even more importantly, we can actually remove an event handler in case we don't need it anymore
// const alertH1 = function (e) {
//   alert(`Great you are reading a heading`);
//   // h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);
// setTimeout(function () {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 1000);

//older method
// h1.onmouseenter = function (e) {
//   alert(`Great you are reading a heading`);
// };

// //*Event Propogation:
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const radomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(radomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = radomColor();
//   console.log('Link', e.target, e.currentTarget);

//   //we can also stop the propagation:
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = radomColor();
//   console.log('Container', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = radomColor();
//   console.log('Nav', e.target, e.currentTarget);
// });

// //* Dom traversing:
// const h1 = document.querySelector('h1');

// //Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'white';

// //Going upwards: parents
// console.log(h1.parentNode);
// // h1.closest('h1').style.background = 'var(--gradient-secondary)';

// //Going sideways
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.9)';
//   }
// });
