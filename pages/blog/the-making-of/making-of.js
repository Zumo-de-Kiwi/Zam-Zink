// Smoth scrolling to a section
const btnScroll = document.querySelector('.toTopBtn');
const main = document.querySelector('.main');
const header = document.querySelector('.header');
btnScroll.addEventListener('click', function (e) {
  header.scrollIntoView({ behavior: 'smooth' });
  // console.log(btnScrollTo, leftArrow);
});
