// Smoth scrolling to a section
const btnScroll = document.querySelector('.toTopBtn');
// const btnScrollTo = document.querySelector('.toTopBtn');
// const leftArrow = document.querySelector('.left-arrow');
btnScroll.addEventListener('click', function (e) {
  main.scrollIntoView({ behavior: 'smooth' });
  // console.log(btnScrollTo, leftArrow);
});
