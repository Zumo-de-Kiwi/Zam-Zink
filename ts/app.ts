//Function to get rid the preloader when the pages loads completely
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader') as HTMLElement;
  preloader.classList.add('preload-finish');
});

// Smoth scrolling to a section
const btnScrollTo = document.querySelector('.toTopBtn') as HTMLElement;
const leftArrow = document.querySelector('.left-arrow') as HTMLElement;
btnScrollTo.addEventListener('click', function (e) {
  leftArrow.scrollIntoView({ behavior: 'smooth' });
});
// console.log(btnScrollTo, leftArrow);

// Close btn
// const closeBtn = document.querySelector('.closeBtn');
// const footer = document.querySelector('.footer');

// const closeFooter = function () {
//   footer.classList.add('hidden');
// };
// closeBtn.addEventListener('click', closeFooter);
