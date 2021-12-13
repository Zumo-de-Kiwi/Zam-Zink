//Function to get rid the preloader when the pages loads completely
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('preload-finish');
});

// Smoth scrolling to a section
const btnScrollTo = document.querySelector('.toTopBtn');
const leftArrow = document.querySelector('.left-arrow');

btnScrollTo.addEventListener('click', function (e) {
  leftArrow.scrollIntoView({ behavior: 'smooth' });
});
