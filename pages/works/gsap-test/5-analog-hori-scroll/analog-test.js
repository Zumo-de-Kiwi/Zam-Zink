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

//HORIZONTAL SCROLL
gsap.registerPlugin(ScrollTrigger);
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
  snap: {
    duration: 0.7,
    delay: 0,
    ease: 'none',
    // inertia: false,
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
