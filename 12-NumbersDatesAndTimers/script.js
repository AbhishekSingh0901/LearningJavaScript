'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// BANKIST APP

/////////////////////////////////////////////////

// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2023-02-01T23:36:17.929Z',
    '2023-02-04T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementsDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago!`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;

    return new Intl.DateTimeFormat(locale).format(date);
  }
};
const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(account.movementsDates[i]);
    const displayDate = formatMovementsDate(date, account.locale);
    console.log(displayDate);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${+Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// //dat/month/year:

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);

    //Experimenting Intl API
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: '2-digit',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long', //short, narrow
    };

    // const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    //`${day}/${month}/${year}, ${hour}:${min}`;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;

  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      //Add transfer date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

console.log(23 === 23.0);

//Base 10 - 0-9
//Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//Conversion
console.log(Number('23'));
console.log(+'23');

//Parsing:
console.log(Number.parseInt('30.8px', 10));
console.log(Number.parseFloat('30.9ex', 10));
console.log(Number.parseFloat('2.5rem'));

//Check if value is not a number
console.log(Number('ff'));
console.log(Number.isNaN(+'ff'));

//Checking if value is a number
console.log(Number.isFinite(20 / 1));

//Math and Rounding:

console.log(Math.sqrt(25));
console.log(Math.max(5, 19, '23', 22)); //This also does type coersion;
console.log(Math.min(5, 19, '23', 22));

//area of a circle of radius of 10px;
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = function (min, max) {
  const output = Math.floor(Math.random() * (max - min) + min);
  return output;
};

console.log(randomInt(4, 10));

//Rounding Integers:
console.log(Math.trunc(-23.68));
console.log(Math.trunc(-56.01));
console.log(Math.trunc(32.89));
console.log(Math.trunc(32.04));

console.log('*****************************************');
console.log(Math.floor(-56.01));
console.log(Math.floor(32.89));
console.log(Math.floor(32.04));
console.log(Math.floor(-23.68));

console.log('*****************************************');
console.log(Math.ceil(-23.68));
console.log(Math.ceil(-56.01));
console.log(Math.ceil(32.89));
console.log(Math.ceil(32.04));

console.log('*****************************************');
console.log(Math.round(-23.68));
console.log(Math.round(-56.01));
console.log(Math.round(32.89));
console.log(Math.round(32.04));

//Rounding Decimals;

console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3)); //Returns a string;
console.log(+(2.3456).toFixed(1));

//The remainder Operator:
console.log(5 % 2);

const isEven = n => n % 2 === 0;

//Numeric Separator:

const diameter = 287_460_000_000;
console.log(diameter);

const priceInCents = 345_59;
console.log(priceInCents);

//Exception:
console.log(Number('250_89')); //this will not work

//Woring With bigInt:

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

console.log(123456789987654321123456789n);
console.log(typeof 123456789987654321123456789n);

//Exception you cannot do mathematical calc combing and normal number with bigInt;
let huge = 123456789987654321123456789n;
// console.log(huge * 2); // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

console.log(20n > 15); //true
console.log(20n === 20); //false coz of strict equality
console.log(20n == 20); // true coz of type coersion

console.log(huge + ' is a really big number!😱');

//Division:
console.log(13n / 3n); //4n always return integer value

// //Working with dates:
// const now = new Date();
// console.log(now);
// console.log(new Date('03 Aug 2020 18:05:43'));
// console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 23, 5, 45));
// console.log(new Date(2037, 10, 31));

// console.log(new Date(0));
// console.log(3 * 24 * 60 * 60 * 1000);

// //Working with date:
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getDate());
// console.log(future.getMonth());
// console.log(future.getDay()); //Day of the week sunday is 0
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(2142237180000));

// console.log(Date.now());
// future.setFullYear(2040);
// console.log(future);

//Operations With Dates:

const future = new Date(2010, 10, 19, 15, 23);
console.log(+future);

// const day1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 19));
// console.log(day1);

//InterNationalising Numbers:
const num = 3884764.23;

const options = {
  style: 'unit', //percent, currency
  unit: 'kilometer-per-hour',
};
console.log('US:', new Intl.NumberFormat('en-US', options).format(num));
console.log('IND:', new Intl.NumberFormat('hi-IN', options).format(num));
console.log('GE', new Intl.NumberFormat('de-DE', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);

//Timers Async:

//setTimeour
const ingredients = ['olives', 'mushrooms'];
const pizaaTimer = setTimeout(
  (topping1, topping2) => {
    console.log(`Here is your pizza🍕 with ${topping1} and, ${topping2}`);
  },
  3000,
  ...ingredients
);

console.log('Waiting...⏱️');

if (ingredients.includes('spinach')) clearTimeout(pizaaTimer);

//setInterval:
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
clearInterval();
