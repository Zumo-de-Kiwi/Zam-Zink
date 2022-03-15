//output the svg line length
// var path = document.querySelector('.path');
// var length = path.getTotalLength();
// console.log(length);

///////////  TOP EXPLAIN ///////////
/// Titles ////
const hovSecs = document.querySelector('.hov-secs');
// titles
const hovArc = document.querySelector('#hov-arc');
const hovDodo = document.querySelector('#hov-dodo');
const hovRand = document.querySelector('#hov-rand');
const hovNood = document.querySelector('#hov-nood');
const hovSkt = document.querySelector('#hov-skt');
/// dynamic explain ////
const dyElWrapper = document.querySelector('.dynamic-el-wrapper');
const exArch = document.querySelector('#explain-arch');
const exCafe = document.querySelector('#explain-cafe');
const exDodo = document.querySelector('#explain-dodo');
const exRand = document.querySelector('#explain-rand');
const exNood = document.querySelector('#explain-nood');
const exSk = document.querySelector('#explain-sk');
console.log(dyElWrapper, exArch);

// FUNC
function showEx(exp) {
  if (exp === 1) {
    exArch.style.display = 'block';
  } else if (exp === 2) {
    exDodo.style.display = 'block';
  } else if (exp === 3) {
    exRand.style.display = 'block';
  } else if (exp === 4) {
    exNood.style.display = 'block';
  } else if (exp === 5) {
    exSk.style.display = 'block';
  } else if (exp === 6) {
    exCafe.style.display = 'block';
  } else {
    console.log('hérror');
  }
}
function hideEx(exp) {
  if (exp === 1) {
    exArch.style.display = 'none';
  } else if (exp === 2) {
    exDodo.style.display = 'none';
  } else if (exp === 3) {
    exRand.style.display = 'none';
  } else if (exp === 4) {
    exNood.style.display = 'none';
  } else if (exp === 5) {
    exSk.style.display = 'none';
  } else if (exp === 6) {
    exCafe.style.display = 'none';
  } else {
    console.log('hérror');
  }
}

//////////////////////////////////////////
/////////// HAMBURGER BTN ///////////////
const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.header');
const main = document.querySelector('.main');

let menuOpen = false;
const closeOrOpenNav = function () {
  if (!menuOpen) {
    leftArrow.classList.add('anim-hidden');
    menuBtn.classList.add('open');
    navBar.classList.add('anim-show');
    menuOpen = true;
  } else {
    leftArrow.classList.remove('anim-hidden');
    menuBtn.classList.remove('open');
    navBar.classList.remove('anim-show');
    menuOpen = false;
  }
};
const closeNav = function () {
  leftArrow.classList.remove('anim-hidden');
  menuBtn.classList.remove('open');
  navBar.classList.remove('anim-show');
};
menuBtn.addEventListener('click', closeOrOpenNav);
main.addEventListener('click', closeNav);

//////////////////////////////////////////
//////////////////////////////////////////
//// go to different sections of the page /////
const noodles = document.querySelector('#noodlesTab');
const cafe = document.querySelector('#cafeTab');
const dodo = document.querySelector('#dodoTab');
const sketch = document.querySelector('#sketchTab');
const arch = document.querySelector('#archTab');
const random = document.querySelector('#randomTab');
//sections
const noodlesSec = document.querySelector('#noodlesDraws');
const cafeSec = document.querySelector('#cafeDraws');
const dodoSec = document.querySelector('#dodoDraws');
const sketchSec = document.querySelector('#sketchDraws');
const archSec = document.querySelector('#archDraws');
const randomSec = document.querySelector('#randomDraws');
// console.log(arch);
noodles.addEventListener('click', function () {
  noodlesSec.scrollIntoView({ behavior: 'smooth' });
});
cafe.addEventListener('click', function () {
  cafeSec.scrollIntoView({ behavior: 'smooth' });
});
dodo.addEventListener('click', function () {
  dodoSec.scrollIntoView({ behavior: 'smooth' });
});
sketch.addEventListener('click', function () {
  sketchSec.scrollIntoView({ behavior: 'smooth' });
});
arch.addEventListener('click', function () {
  archSec.scrollIntoView({ behavior: 'smooth' });
});
random.addEventListener('click', function () {
  randomSec.scrollIntoView({ behavior: 'smooth' });
});

// Smoth scrolling to a section
const btnScroll = document.querySelector('.toTopBtn');
btnScroll.addEventListener('click', function (e) {
  main.scrollIntoView({ behavior: 'smooth' });
  // console.log(btnScrollTo,mian);
});
