// Smoth scrolling to a section
// const main = document.querySelector('.main');
const header = document.querySelector('.main-header');
const btnScroll = document.querySelector('.toTopBtn');
btnScroll.addEventListener('click', function (e) {
  header.scrollIntoView({ behavior: 'smooth' });
  // console.log(btnScroll, header);
});

/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
//// Elements (listeners)////
const pawn = document.querySelector('#pawn-open');
const readme = document.querySelector('#read-me-open');
const out = document.querySelector('#out-open');
const eatme = document.querySelector('#eatme-open');
// console.log('Listeners: ' + pawn, readme, out, eatme);
/////////// MODALS ///// ///////
const pawnModal = document.querySelector('#pawn-modal');
const readmeModal = document.querySelector('#read-modal');
const outModal = document.querySelector('#out-modal');
const eatmeModal = document.querySelector('#eat-modal');
// const modal = document.querySelectorAll('.modal');
console.log('Modals: ' + pawnModal, readmeModal);
console.log('Modals: ' + outModal, eatmeModal);
////////// CLOSE TRIGGERS //////////
// const xBtn = document.querySelectorAll('.x-btn');
const bg = document.querySelector('.bg-modal');
const shadow = document.querySelector('.shadow-layer');
console.log('Close triggers: ' + bg, shadow);

/////////// FUNCS ///////////////
// PAWN
const openPawn = function () {
  pawnModal.classList.remove('hidden');
  bg.classList.remove('hidden');
  shadow.classList.remove('hidden');
  console.log('Open Pawn');
};
// READ ME
const openRead = function () {
  readmeModal.classList.remove('hidden');
  bg.classList.remove('hidden');
  shadow.classList.remove('hidden');
  console.log('Open Read');
};
// EAT ME
const openEat = function () {
  eatmeModal.classList.remove('hidden');
  bg.classList.remove('hidden');
  shadow.classList.remove('hidden');
  console.log('Open Eat');
};
// CLOSE
// if (!modal.classList.contains('hidden'))
const closeModal = function () {
  if (!pawnModal.classList.contains('hidden')) {
    pawnModal.classList.add('hidden');
  } else if (!readmeModal.classList.contains('hidden')) {
    readmeModal.classList.add('hidden');
  } else if (!eatmeModal.classList.contains('hidden')) {
    eatmeModal.classList.add('hidden');
  } else if (!outModal.classList.contains('hidden')) {
    outModal.classList.add('hidden');
  } else {
    console.log("Hérror, there isn't an open modal.");
  }
  bg.classList.add('hidden');
  shadow.classList.add('hidden');
  console.log('Close Modal');
};
////////////////////////////////
///////// EVENT LISTENER //////
// CLOSE
bg.addEventListener('click', closeModal);
// OPEN
pawn.addEventListener('click', openPawn);
readme.addEventListener('click', openRead);
eatme.addEventListener('click', openEat);
