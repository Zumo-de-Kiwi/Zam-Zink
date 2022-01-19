// Smoth scrolling to a section
const btnScroll = document.querySelector('.toTopBtn');
const main = document.querySelector('.main');
btnScroll.addEventListener('click', function (e) {
  main.scrollIntoView({ behavior: 'smooth' });
  // console.log(btnScrollTo, leftArrow);
});

// EVENT
const makeIntro = document.querySelector('#make-intro');
const fullWidth = document.querySelector('.full-width');
const introP2 = document.querySelector('#intro-p-2');
const moreIntro = document.querySelector('.more-intro');
console.log('Close triggers: ' + makeIntro);

/////////// FUNCS ///////////////
// PAWN
const expandIntro = function () {
  // makeIntro.classList.add('fullWidth');
  moreIntro.classList.add('hidden');
  introP2.classList.remove('hidden');
};
makeIntro.addEventListener('click', expandIntro);
