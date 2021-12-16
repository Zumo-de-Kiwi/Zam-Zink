//// go to different sections of the page ////////
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
console.log(arch);
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

//////// backup
//tab navbar selector
// //for css:
// [data-tab-content] {
//     display: none;
//   }
//   .active[data-tab-content] {
//     display: block;
//   }
// const tabs = document.querySelectorAll(['[data-tab-target']);
// const tabContents = document.querySelectorAll('[data-tab-content]');

// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     const target = document.querySelector(tab.dataset.tabTarget);
//     tabContents.forEach(tabContent => {
//       tabContent.classList.remove('active');
//     });
//     target.classList.add('active');
//   });
// });
