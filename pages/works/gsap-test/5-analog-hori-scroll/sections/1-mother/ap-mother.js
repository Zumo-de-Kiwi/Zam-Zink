gsap.registerPlugin(ScrollTrigger);

//////////////// CHANGE COLORS /////////////////////
////////////////////////////////////////////////////////////////
//https://codepen.io/stonkol/pen/YzrEBja?editors=0110

const sectionsForWidth = gsap.utils.toArray('section'); //sections for know the width
let maxWidth = 0;
console.log(window.innerWidth * 0.17);
const getMaxWidth = () => {
  maxWidth = 0; //sectionsForWidth.offsetWidth* ((100-66)/2);
  sectionsForWidth.forEach(section => {
    maxWidth += section.offsetWidth;
    console.log(maxWidth);
  });
};
getMaxWidth();
ScrollTrigger.addEventListener('refreshInit', getMaxWidth);

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
const sec6 = document.querySelector('#sec6');
const sec7 = document.querySelector('#sec7');
const sec8 = document.querySelector('#sec8');
const sec9 = document.querySelector('#sec9');
const sec10 = document.querySelector('#sec10');
const sec11 = document.querySelector('#sec11');

////////////////// SECTION　１　////////////
ScrollTrigger.create({
  trigger: sec1,
  start: () =>
    'top top-=' +
    (sec1.offsetLeft - window.innerWidth / 2) *
      (maxWidth / (maxWidth - window.innerWidth)),
  end: () =>
    '+=' + sec1.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
  toggleClass: { targets: body, className: 'section1' },
});

//////////////// SECTION　2　//////////////
ScrollTrigger.create({
  trigger: sec2,
  start: () => 'top top-=' - window.innerWidth * 0.01, //have a negative window
  end: () => '+=' + window.innerWidth * 0.15,
  toggleClass: { targets: body, className: 'section2' },
});
// console.log(`sec2: + ${sec2.offsetWidth}`);

//////////////// SECTION　3　/////////////////
ScrollTrigger.create({
  trigger: sec3,
  start: () => 'top top-=' + window.innerWidth * 0.05,
  end: () => '+=' + window.innerWidth * 0.15,
  toggleClass: { targets: body, className: 'section3' },
});
//////////////// SECTION　4　//////////////////
ScrollTrigger.create({
  trigger: sec4,
  start: () => 'top top-=' + window.innerWidth * 0.14,
  end: () => '+=' + window.innerWidth * 0.22,
  toggleClass: { targets: body, className: 'section4' },
});
//////////////// SECTION　5　//////////////////
ScrollTrigger.create({
  trigger: sec5,
  start: () => 'top top-=' + window.innerWidth * 0.22,
  end: () => '+=' + window.innerWidth * 0.32,
  toggleClass: { targets: body, className: 'section5' },
});
//////////////// SECTION　6　//////////////////
ScrollTrigger.create({
  trigger: sec6,
  start: () => 'top top-=' + window.innerWidth * 0.31,
  end: () => '+=' + window.innerWidth * 0.4,
  toggleClass: { targets: body, className: 'section6' },
});
//////////////// SECTION　7　//////////////////
ScrollTrigger.create({
  trigger: sec7,
  start: () => 'top top-=' + window.innerWidth * 0.4,
  end: () => '+=' + window.innerWidth * 0.49,
  toggleClass: { targets: body, className: 'section7' },
});
//////////////// SECTION　8　//////////////////
ScrollTrigger.create({
  trigger: sec8,
  start: () => 'top top-=' + window.innerWidth * 0.49,
  end: () => '+=' + window.innerWidth * 0.59,
  toggleClass: { targets: body, className: 'section8' },
});
//////////////// SECTION　9　//////////////////
ScrollTrigger.create({
  trigger: sec9,
  start: () => 'top top-=' + window.innerWidth * 0.59,
  end: () => '+=' + window.innerWidth * 0.69,
  toggleClass: { targets: body, className: 'section9' },
});
//////////////// SECTION　10　//////////////////
ScrollTrigger.create({
  trigger: sec10,
  start: () => 'top top-=' + window.innerWidth * 0.69,
  end: () => '+=' + window.innerWidth * 0.79,
  toggleClass: { targets: body, className: 'section10' },
});
//////////////// SECTION　11　//////////////////
ScrollTrigger.create({
  trigger: sec11,
  start: () => 'top top-=' + window.innerWidth * 0.79,
  end: () => '+=' + window.innerWidth * 1,
  toggleClass: { targets: body, className: 'section11' },
});

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
  // snap: {
  //   duration: 0.7,
  //   delay: 0,
  //   ease: 'none',
  //   //is like inertia: false,
  //   snapTo: (value, self) => {
  //     let snapped = snap(value);
  //     if (snapped > value === self.direction > 0) {
  //       return snapped;
  //     }
  //     return snapped + (self.direction > 0 ? snapBy : -snapBy);
  //   },
  // },
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
