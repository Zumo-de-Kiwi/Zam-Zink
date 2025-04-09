import $ from 'jquery';

/////////////////////////////////
/////// FOR HOME PAGE ///////////

/////////////////////////////////
/////////////////////////////////
///////// PRELOADER /////////////
/////////////////////////////////
/////////////////////////////////
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.classList.add('preload-finish');
  }
});

/////////////////////////////////
/////////////////////////////////
////////// DARK MODE  ///////////
/////////////////////////////////
/////////////////////////////////
// https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]',
) as HTMLElement;
const currentTheme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : null;
/////////////////////////////////
// 1. Check for saved user preference, if any, on load of the website
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    (toggleSwitch as HTMLInputElement).checked = true;
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
  let count = 0;
  let wordsArray = [];

  wordsArray = ['¡Hola!', '嗨~!', '👋', 'Hej!', '哩賀!', '🖖', 'Здарова!']; //'Hey' is already included
  setInterval(function () {
    count++;
    $('.change-hey').fadeOut(404, function (this: HTMLElement) {
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
const stickersAll = document.querySelector(
  '.stickers',
) as HTMLDivElement | null; //all stickers pop up
const bgClose = document.querySelector('.bg-close'); //bg-close
const stickersX = document.querySelector('.stickers-x-btn');

//////////////// FUNC //////////////////
const openStickers = function () {
  stickersAll?.classList.add('open');
  bgClose?.classList.remove('hidden');
};
const closeStickers = function () {
  stickersAll?.classList.remove('open');
  bgClose?.classList.add('hidden');
};

let stickersOpen = 0;
const openOrClose = function (whoClicked: number) {
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

const linkPressed = function () {
  openOrClose(1);
};
const bgPressed = function () {
  openOrClose(0);
};
const stickersXPressed = function () {
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
// stickersX.addEventListener('click', stickersXPressed);

/////////////////////////////////
/////////////////////////////////
///////// Close btn /////////////
/////////////////////////////////
/////////////////////////////////
const closeBtn = document.querySelector('.closeBtn');
const footer = document.querySelector('.footer');

const closeFooter = function () {
  footer?.classList.add('hidden');
};
closeBtn?.addEventListener('click', closeFooter);

// close button will be on the left when the user is using macOS
// const isMac = navigator.userAgent.includes('Mac OS X');
// if (isMac) {
//   closeBtn?.classList.add('onLeft');
// }

// For other user system properties: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_nav_all
console.log(`OS, Engine, Browser: ${navigator.userAgent}`);
console.log(`Browser Language: ${navigator.language}`);
console.log(`Cookies Enabled: ${navigator.cookieEnabled}`);
