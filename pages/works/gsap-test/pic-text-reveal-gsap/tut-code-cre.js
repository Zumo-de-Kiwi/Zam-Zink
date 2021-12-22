// /https://www.youtube.com/watch?v=WaB_OeCEZB0
// gsap.registerPlugin(ScrollTrigger);
const reveal = gsap.utils.toArray('.reveal');
// console.log(reveal);
reveal.forEach((text, i) => {
  ScrollTrigger.create({
    trigger: text,
    toggleClass: 'active',
    start: 'top 90%',
    end: 'top 15%',
    markers: true,
  });
});

const images = gsap.utils.toArray('img');
images.forEach((img, i) => {
  ScrollTrigger.create({
    trigger: img,
    toggleClass: 'active',
    start: 'top 90%',
    end: 'top 15%',
    markers: true,
  });
});
