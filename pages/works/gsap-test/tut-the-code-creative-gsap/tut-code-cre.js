gsap.registerPlugin(ScrollTrigger);
////////// tut 6 //////////////
// the easy gsap way
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.box',
    markers: true,
    start: 'top 90%',
    end: 'top 20%',
    scrub: 1,
  },
});
tl.to('.box', { x: 500, duration: 5 })
  .to('.box', { y: 200, duration: 3 })
  .to('.box', { x: 0, duration: 1 });

// the difficult way
// gsap.to('.box', { x: 500, duration: 2 });
// gsap.to('.box', { y: 200, duration: 3, delay: 2 });
// gsap.to('.box', { x: 0, duration: 2, delay: 5 });

////////////////////
//tut 1~5

// gsap.to('.square', {
//   x: 600, //700px
//   duration: 8,
//   scrollTrigger: {
//     trigger: '.square2',
//     start: 'top 80%',
//     end: 'top 30%',
//     scrub: 4,
//     toggleActions: 'restart none none none', //play pause restart reverse resume complete
//     ///// onEnter onLeave onEnterBack onLeaveBack
//     // pin: true, //will be like position fixed
//     pin: '.square',
//     pinSpacing: true,
//     markers: true,
//   },
// });

// gsap.to('.square', {
//   //   x: 700, //700px
//   x: '700px', //700px
//   duration: 3,
//   //   scrollTrigger: '.square',
//   //   scrollTrigger: '.square2', //square2 trigger the square
//   scrollTrigger: {
//     trigger: '.square',
//     // start: 400, //start when the viewport scroll down 400px
//     // start: 'top center', //when the viewport from the top arrives to the center(50vh) it animates
//     start: 'top 30%', //when the viewport from the top arrives to (30vh) it animates
// // SCRUB
// scrub: true, //move with while scrolling
// scrub: 3, //scrub {x}s //like it has inertia
// toggleActions: 'play none none none', //the defaults
///// onEnter onLeave onEnterBack on LeaveBack
//     // markers: true, //appears makers in the viewport
//     end: 'center 20%',
// end: () => `+=${document.querySelector('.square').offsetHeight}`, //the end is the height of the square(the  bottom)
//     markers: true,
//     //   {
//     //     startColor: 'purple', //change appeareance of the makers in the viewport
//     //     endColor: 'fuchsia',
//     //     fontSize: '2rem',
//     //     indent: 50, //right: {x} px
//     //   },
// toggleClass: 'rojo',
// toggleClass: 'border',
//   },
// });
