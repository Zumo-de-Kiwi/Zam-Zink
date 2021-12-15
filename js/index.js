// Close btn
const closeBtn = document.querySelector('.closeBtn');
const footer = document.querySelector('.footer');

const closeFooter = function () {
  footer.classList.add('hidden');
};
closeBtn.addEventListener('click', closeFooter);
