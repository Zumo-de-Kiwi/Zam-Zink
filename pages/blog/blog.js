// Smoth scrolling to a section
const btnScroll = document.querySelector('.toTopBtn');
const main = document.querySelector('.main');
btnScroll.addEventListener('click', function (e) {
  main.scrollIntoView({ behavior: 'smooth' });
  // console.log(btnScrollTo, leftArrow);
});
