// const p = document.querySelector(".mousePos");
// /////////////////////////////////////////////
// // And here, we use changed the font’s axes
// // dependent on the user’s mouse position on the screen.
// function updateText(e) {
//   multiplierWidth = e.offsetX / window.innerWidth;
//   multiplierHeight = e.offsetY / window.innerHeight;

//   randomSlnt = -multiplierWidth * (0 - 15) - 15;
//   randomWeight = multiplierHeight * (800 - 300) + 300;
//   //Change the WEIGHT and the slnt
//   p.style.fontVariationSettings =
//     '"wght" ' + randomWeight + ', "slnt" ' + randomSlnt;
//   console.log(multiplierHeight, randomWeight);
// }
// // setInterval(updateText, 2000);
// // window.onload = updateText() {
// //   setInterval(mousemove, 1000);
// // }
// window.addEventListener("mousemove", updateText);

/////////  VAriable fonts performanc  ///////
// You’ll soon find that animating variable fonts with either CSS keyframes or JavaScript can cause devices to run real hot and become slow or unresponsive, especially when the animations have been running for a while. This will hopefully be optimized in subsequent browser releases, but until then, you’ll just have to minimize browser repainting. We’ve found that using an IntersectionObserver works great, and allows us to stop the animations whenever the variable text is off-screen.
// var observer = new IntersectionObserver(function (entries, observer) {
//   entries.forEach(function (entry) {
//     // Pause/Play the animation
//     if (entry.isIntersecting) p.style.animationPlayState = "running";
//     else p.style.animationPlayState = "paused";
//   });
// });

// var variableTexts = document.querySelectorAll(".vf-animation");
// variableTexts.forEach(function (el) {
//   observer.observe(el);
// });
