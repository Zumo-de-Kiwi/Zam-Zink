/////////////////////////////////
/////// FOR HOME PAGE ///////////

/////////////////////////////////
/////////////////////////////////
///////// PRELOADER /////////////
/////////////////////////////////
/////////////////////////////////
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('preload-finish');
});

/////////////////////////////////
/////////////////////////////////
////////// DARK MODE  ///////////
/////////////////////////////////
/////////////////////////////////
// https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8
var toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
var currentTheme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : null;
/////////////////////////////////
// 1. Check for saved user preference, if any, on load of the website
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}
/////////////////////////////////
// 2. Store the user preference for future visits
// 3. Adding the event handlers (using the toogle)
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); //add this
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); //add this
  }
}
toggleSwitch.addEventListener('change', switchTheme, false);

/////////////////////////////////
/////////////////////////////////
////////// HEY CHANGES //////////
/////////////////////////////////
/////////////////////////////////
// VERSION D with fade
$(function () {
  count = 0;
  // wordsArray = ['Hej', 'Hey', '哈囉', 'Hola', '哩賀'];
  wordsArray = ['¡Hola!', '嗨~!', '👋', 'Hej!', '哩賀!', '🖖', 'Здарова!']; //'Hey' is already included //Other ru: Д'арова!
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
var stickersLink = document.querySelector('#stickers-link');
var stickersAll = document.querySelector('.stickers'); //all stickers pop up
var bgClose = document.querySelector('.bg-close'); //bg-close
var stickersX = document.querySelector('.stickers-x-btn');
//////////////// FUNC //////////////////
var openStickers = function () {
  stickersAll === null || stickersAll === void 0
    ? void 0
    : stickersAll.classList.add('open');
  bgClose === null || bgClose === void 0
    ? void 0
    : bgClose.classList.remove('hidden');
};
var closeStickers = function () {
  stickersAll === null || stickersAll === void 0
    ? void 0
    : stickersAll.classList.remove('open');
  bgClose === null || bgClose === void 0
    ? void 0
    : bgClose.classList.add('hidden');
};
var stickersOpen = 0;
var openOrClose = function (whoClicked) {
  console.log(whoClicked);
  // whoclicked == 1 it need to be open
  if (whoClicked == 1) {
    stickersOpen = 1;
    openStickers();
  }
  // whoclicked == 0 it need to be closed
  else if (whoClicked == 0) {
    stickersOpen = 0;
    // closeStickers();
  } else {
    console.log('hérror on who clicked.');
  }
};
var linkPressed = function () {
  openOrClose(1);
};
var bgPressed = function () {
  openOrClose(0);
};
var stickersXPressed = function () {
  openOrClose(0);
};
if (stickersLink) {
  stickersLink.addEventListener('click', linkPressed);
}
if (bgClose) {
  bgClose.addEventListener('click', closeStickers);
}
if (stickersX) {
  stickersX.addEventListener('click', closeStickers);
}
/////////////////////////////////
/////////////////////////////////
///////// Close btn /////////////
/////////////////////////////////
/////////////////////////////////
const closeBtn = document.querySelector('.closeBtn');
const footer = document.querySelector('.footer');

const closeFooter = function () {
  footer.classList.add('hidden');
};
closeBtn.addEventListener('click', closeFooter);
//////////////////////////////////
///// place left for MAC /////////
if (navigator.userAgent.includes('Mac OS X')) {
  closeBtn.classList.add('onLeft');
}

// For other user system properties: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_nav_all
console.log(`OS, Engine, Browser: ${navigator.userAgent}`);
console.log(`Browser Language: ${navigator.language}`);
console.log(`Cookies Enabled: ${navigator.cookieEnabled}`);
