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
  wordsArray = ['¡Hola!', '嗨~!', '👋', 'Hej!', '哩賀!', 'Bon dia!', '🖖'];
  setInterval(function () {
    count++;
    $('.change-hey').fadeOut(404, function () {
      $(this)
        .text(wordsArray[count % wordsArray.length])
        .fadeIn(404);
    });
  }, 3141);
});

/////////////////////////////////
/////////////////////////////////
/////// POP UP STICKERS /////////
/////////////////////////////////
/////////////////////////////////
const stickersLink = document.querySelector('#stickers-link');
const stickersAll = document.querySelector('.stickers'); //all stickers pop up
const bgClose = document.querySelector('.bg-close'); //bg-close
const stickersX = document.querySelector('.stickers-x-btn');

//////////////// FUNC //////////////////
const openStickers = function () {
  stickersAll.classList.add('open');
  bgClose.classList.remove('hidden');
};
const closeStickers = function () {
  stickersAll.classList.remove('open');
  bgClose.classList.add('hidden');
};

let stickersOpen = 0;
const openOrClose = function (whoClicked) {
  console.log(whoClicked);
  // whoclicked == 1 it need to be open
  if (whoClicked == 1) {
    stickersOpen = 1;
    openStickers();
  }
  // whoclicked == 0 it need to be closed
  else if (whoClicked == 0) {
    stickersOpen = 0;
  } else {
    console.log('hérror on who clicked.');
  }
};

const linkPressed = function () {
  openOrClose(1);
};
const bgPressed = function () {
  openOrClose(0);
};
const stickersXPressed = function () {
  openOrClose(0);
};

stickersLink.addEventListener('click', linkPressed);
bgClose.addEventListener('click', closeStickers);
stickersX.addEventListener('click', closeStickers);
// stickersX.addEventListener('click', stickersXPressed);
