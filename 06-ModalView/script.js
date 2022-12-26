'use strict';
//revising from beginning
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

const exitModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i of btnOpenModal) {
  i.addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', exitModal);
overlay.addEventListener('click', exitModal);

//handeling keypress event
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    exitModal();
  }
});
