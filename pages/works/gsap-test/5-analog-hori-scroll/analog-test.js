gsap.registerPlugin(ScrollTrigger);
//change colors
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// OPTION A
// https://codepen.io/snorkltv/pen/KKvQOKY
// const sectionColors = ['black', 'pink', 'friends-green', 'pale-blue', 'yellow'];
// const bgColors = ['#000', '#F9D1CF', '#33D17C', '#3E44C8', '#FFF23F'];
// const lineColors = ['#FFFF00', '#000', '#fff', '#000', '#000'];
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// OPTION B
// from: https://codepen.io/stonkol/pen/MWEOzom?editors=1010
// gsap.registerPlugin(ScrollTrigger);

// /* SMOOTH SCROLL */
// const scroller = new LocomotiveScroll({
//   el: document.querySelector('.container'),
//   smooth: true,
// });

// scroller.on('scroll', ScrollTrigger.update);

// ScrollTrigger.scrollerProxy('.container', {
//   scrollTop(value) {
//     return arguments.length
//       ? scroller.scrollTo(value, 0, 0)
//       : scroller.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       left: 0,
//       top: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
// });

// ScrollTrigger.addEventListener('refresh', () => scroller.update());

// ScrollTrigger.refresh();

// /* COLOR CHANGER */
// window.addEventListener('load', function () {
//   const scrollColorElems = document.querySelectorAll('[data-bgcolor]');
//   scrollColorElems.forEach((colorSection, i) => {
//     const prevBg = i === 0 ? '' : scrollColorElems[i - 1].dataset.bgcolor;
//     const prevText = i === 0 ? '' : scrollColorElems[i - 1].dataset.textcolor;

//     ScrollTrigger.create({
//       trigger: colorSection,
//       scroller: '.panel', //was container in the original file
//       start: 'top 50%',
//       onEnter: () =>
//         gsap.to('body', {
//           backgroundColor: colorSection.dataset.bgcolor,
//           color: colorSection.dataset.textcolor,
//           overwrite: 'auto',
//         }),
//       onLeaveBack: () =>
//         gsap.to('body', {
//           backgroundColor: prevBg,
//           color: prevText,
//           overwrite: 'auto',
//         }),
//     });
//   });
// });
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
///// OPtion C
//https://codepen.io/stonkol/pen/YzrEBja?editors=0110
/////// for css
// section.active {
//   background-color: orange;
// }
const sectionsForWidth = gsap.utils.toArray('section'); //sections for know the width
let maxWidth = 0;
console.log(window.innerWidth * 0.17);
const getMaxWidth = () => {
  maxWidth = 0; //0;; //sectionsForWidth.offsetWidth* ((100-66)/2);//the leftest part of the page without a section
  sectionsForWidth.forEach(section => {
    maxWidth += section.offsetWidth;
    console.log(maxWidth);
  });
};
getMaxWidth();
ScrollTrigger.addEventListener('refreshInit', getMaxWidth);

// gsap.to(sectionsForWidth, {
//   x: () => `-${maxWidth - window.innerWidth}`,
//   ease: 'none',
//   duration: 1,
//   scrollTrigger: {
//     trigger: '.wrapper',
//     pin: true,
//     scrub: true,
//     end: () => `+=${maxWidth}`,
//     invalidateOnRefresh: true,
//   },
// });

// sectionsForWidth.forEach((sct, i) => {
//   ScrollTrigger.create({
//     trigger: sct,
//     start: () =>
//       'top top-=' +
//       (sct.offsetLeft - window.innerWidth / 2) *
//         (maxWidth / (maxWidth - window.innerWidth)),
//     end: () =>
//       '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
//     duration: 1,
//     toggleClass: { targets: sct, className: 'active' },
//   });
// });

////////////////////////////
///// MY DIY CODE //////////
////////////////////////////
const body = document.querySelector('.body');
///// SECTIONS
const sec1 = document.querySelector('#sec1');
const sec2 = document.querySelector('#sec2');
const sec3 = document.querySelector('#sec3');
const sec4 = document.querySelector('#sec4');
const sec5 = document.querySelector('#sec5');

////////////////// ORIGINAL SECTION　１　////////////
// ScrollTrigger.create({
//   trigger: sec1,
//   start: () =>
//     'top top-=' +
//     (sec1.offsetLeft - window.innerWidth / 2) *
//       (maxWidth / (maxWidth - window.innerWidth)),
//   end: () =>
//     '+=' + sec1.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
//   duration: 1,
//   toggleClass: { targets: body, className: 'section1' },
// });
////////////////// SECTION　１　////////////
ScrollTrigger.create({
  trigger: sec1,
  start: () =>
    'top top-=' +
    (sec1.offsetLeft - window.innerWidth / 2) *
      (maxWidth / (maxWidth - window.innerWidth)),
  end: () =>
    '+=' + sec1.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
  duration: 1,
  toggleClass: { targets: body, className: 'section1' },
});

//////////////// SECTION　2　//////////////
ScrollTrigger.create({
  trigger: sec2,
  start: () => 'top top-=' + window.innerWidth * 0.12,
  end: () => '+=' + window.innerWidth * 0.17,
  duration: 1,
  toggleClass: { targets: body, className: 'section2' },
});
// console.log(`sec2: + ${sec2.offsetWidth}`);

//////////////// SECTION　3　/////////////////
ScrollTrigger.create({
  trigger: sec3,
  start: () => 'top top-=' + window.innerWidth * 0.28,
  end: () => '+=' + window.innerWidth * 0.3,
  markers: true,
  // duration: 5,
  toggleClass: { targets: body, className: 'section3' },
});
//////////////// SECTION　4　//////////////////
ScrollTrigger.create({
  trigger: sec4,
  start: () => 'top top-=' + window.innerWidth * 0.5,
  end: () => '+=' + window.innerWidth * 0.53,
  // duration: 1,
  toggleClass: { targets: body, className: 'section4' },
});
//////////////// SECTION　5　//////////////////
ScrollTrigger.create({
  trigger: sec5,
  start: () => 'top top-=' + window.innerWidth * 0.75,
  end: () => '+=' + window.innerWidth * 0.8,
  // duration: 1,
  toggleClass: { targets: body, className: 'section5' },
});
////////////////////////////////////////////////
///////////////////////////////////////////////
/////////// learning GSAP STUFF
// const blocks = gsap.utils.toArray('.block');
// blocks.forEach(block => {
//   gsap.to(block, {
//     x: 300,
//     scrollTrigger: {
//       trigger: block,
//       // start: 'left 40%', //when block left is 40% from left viewport
//       // following two lines: Start animation mid-viewport, but reset it offscreen
//       start: 'center 70%', //when the center of the object arrives to the top of the viewport
//       toggleActions: 'play none none reset',
//     },
//   });
// });

///////////////////////////////////////////
/////////  HORIZONTAL SCROLL  /////////////
// gsap.registerPlugin(ScrollTrigger);//written above
const sections = document.querySelectorAll('.block');
const scrollContainer = document.querySelector('.panel2');
const snapBy = 1 / (sections.length - 1);
const snap = gsap.utils.snap(snapBy);

const scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
});

const horizontalScroll = ScrollTrigger.create({
  animation: scrollTween,
  trigger: scrollContainer,
  pin: true,
  scrub: 1, //1 sec, smoothness physics
  end: () => '+=' + scrollContainer.offsetWidth,
  // <Trying>

  // <Trying/>
  snap: {
    duration: 0.7,
    delay: 0,
    ease: 'none',
    //is like inertia: false,
    snapTo: (value, self) => {
      let snapped = snap(value);
      if (snapped > value === self.direction > 0) {
        return snapped;
      }
      return snapped + (self.direction > 0 ? snapBy : -snapBy);
    },
  },
});

// total scroll amount divided by the total distance that the sections move gives us the ratio we can apply to the pointer movement so that it fits.
var dragRatio =
  scrollContainer.offsetWidth / (window.innerWidth * (sections.length - 1));
var drag = Draggable.create('.proxy', {
  trigger: scrollContainer,
  type: 'x',
  onPress() {
    this.startScroll = horizontalScroll.scroll();
  },
  onDrag() {
    horizontalScroll.scroll(
      this.startScroll - (this.x - this.startX) * dragRatio
    );
  },
})[0];
