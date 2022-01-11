// Smoth scrolling to a section
// const main = document.querySelector('.main');

const header = document.querySelector('.main-header');
const btnScroll = document.querySelector('.toTopBtn');
btnScroll.addEventListener('click', function (e) {
  header.scrollIntoView({ behavior: 'smooth' });
  console.log(btnScrollTo, header);
});
