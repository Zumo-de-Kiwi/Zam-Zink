/////////////////////////////////
///////// preloader /////////
/////////////////////////////////
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('preload-finish');
});

/////////////////////////////////
///////// Close btn /////////
/////////////////////////////////
const closeBtn = document.querySelector('.closeBtn');
const footer = document.querySelector('.footer');

const closeFooter = function () {
  footer.classList.add('hidden');
};
closeBtn.addEventListener('click', closeFooter);

/////////////////////////////////
////////// HEY CHANGES ///////////
/////////////////////////////////
// VERSION D with fade
$(function () {
  count = 0;
  // wordsArray = ['Hej', 'Hey', '哈囉', 'Hola', '哩賀'];
  wordsArray = ['¡Hola!', '哈囉 !', 'Hej!', '哩賀 !', 'Hey!'];
  setInterval(function () {
    count++;
    $('.change-hey').fadeOut(500, function () {
      $(this)
        .text(wordsArray[count % wordsArray.length])
        .fadeIn(500);
    });
  }, 2300);
});
