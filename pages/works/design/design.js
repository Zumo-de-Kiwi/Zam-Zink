// Smoth scrolling to a section
// const main = document.querySelector('.main');
const header = document.querySelector('.main-header');
const btnScroll = document.querySelector('.toTopBtn');
btnScroll.addEventListener('click', function (e) {
  header.scrollIntoView({ behavior: 'smooth' });
  // console.log(btnScroll, header);
});

//
//
//// Elements (listeners)////
const pawn = document.querySelector('#pawn-open');
const readme = document.querySelector('#read-me-open');
const out = document.querySelector('#out-open');
const eatme = document.querySelector('#eatme-open');
console.log(pawn, readme, out, eatme, bg);
/////////// MODALS ////////////
const pawnModal = document.querySelector('#pawn-modal');
const readmeModal = document.querySelector('#read-me-modal');
const outModal = document.querySelector('#out-modal');
const eatmeModal = document.querySelector('#eatme-modal');
console.log(pawnModal, readmeModal, outModal, eatmeModal, bgModal);
////////// CLOSE TRIGGERS //////////
const bg = document.querySelector('.bg-modal');
const xBtn = document.querySelector('.x-btn');

// PAWN
const openPawn = function () {
  pawnModal.classList.remove('hidden');
  bg.classList.remove('hidden');
  xBtn.classList.remove('hidden');
};
const closePawn = function () {
  pawnModal.classList.add('hidden');
  bg.classList.add('hidden');
  xBtn.classList.add('hidden');
};

// READ ME

///////// EVENT LISTENER //////
