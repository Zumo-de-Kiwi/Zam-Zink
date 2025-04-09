const p = document.querySelector('.mousePos') as HTMLParagraphElement;

//////////// RANDOM //////////////////

// p.style.fontVariationSettings = '"wght" 550';
// p.style.fontWeight = 550;
// // myText.style.fontStretch = "150%"

// function randomizeText() {
//   randomWeight = Math.random() * (200 - 35) + 35;
//   //   randomWidth = Math.random() * (200 - 100) + 100;
//   p.style.fontVariationSettings =
//     '"wght" ' + randomWeight /*+ ', "wdth" ' + randomWidth*/;
// }
// setInterval(randomizeText, 1000);

/////////////////////////////////////////////
//Change the text width with different screen sizes
// function fluidAxisVariation() {
//   //Current vieport width
//   const windowWidth = window.innerWidth;

//   // Get new scales for viewwport and  font weigth
//   const viewportScale = (windowWidth - 320) / (1440 - 320);
//   const fontWeigthScale = viewportScale * (450 - 730) + 730; //from 450 to 730 weight
//   console.log(fontWeigthScale);
//   // Set in CSS using CSS custom Property
//   p.style.setProperty("--main-weight", fontWeigthScale);
// }
// function variableResize() {
//   // Minimum & Maximum font weight
//   const minFontWeight = 400;
//   const maxFontWeight = 800;

//   // Minimum and Maximum viewport size
//   const maxWindowSize = 1440;
//   const minWindowSize = 320;

//   // Get current viewport size
//   const windowWidth = window.innerWidth;

//   //Scale within a range
//   const percent =
//     (windowWidth - minWindowSize) / (maxWindowSize - minWindowSize);
//   const fontWeightScale =
//     percent * (minFontWeight - maxFontWeight) + maxFontWeight;

//   // Get the new font weight
//   const newWeight =
//     windowWidth > maxWindowSize
//       ? minFontWeight
//       : windowWidth < minWindowSize
//       ? maxFontWeight
//       : fontWeightScale;

//   // Set my CSS Custom Property for weight to update.
//   p.style.setProperty("--weight", newWeight);
// }

// window.addEventListener("resize", variableResize);

/////////////////////////////////////////////
/////////////////////////////////////////////
// And here, we use changed the font’s axes
// dependent on the user’s mouse position on the screen.
/////////////////////////////////////////////
/////////////////////////////////////////////

function updateText(e: MouseEvent) {
  let multiplierWidth: number;
  let multiplierHeight: number;
  let randomSlnt: number;
  let randomWeight: number;

  multiplierWidth = e.offsetX / window.innerWidth;
  multiplierHeight = e.offsetY / window.innerHeight;

  randomSlnt = multiplierWidth * (0 - 15) + 0;
  randomWeight = multiplierHeight * (800 - 300) + 300;
  //Change the WEIGHT and the slnt
  p.style.fontVariationSettings =
    '"wght" ' + randomWeight + ', "slnt" ' + randomSlnt;
  console.log(multiplierHeight, randomWeight);
  // console.log(mouseX, mouseY);
  console.log(multiplierHeight, randomWeight);
}
// setInterval(updateText, 1000);
window.addEventListener('mousemove', updateText);

/////////  VAriable fonts performanc  ///////
// You’ll soon find that animating variable fonts with either CSS keyframes or JavaScript can cause devices to run real hot and become slow or unresponsive, especially when the animations have been running for a while. This will hopefully be optimized in subsequent browser releases, but until then, you’ll just have to minimize browser repainting. We’ve found that using an IntersectionObserver works great, and allows us to stop the animations whenever the variable text is off-screen.
// var observer = new IntersectionObserver(function(entries, observer) {
//   entries.forEach(function(entry) {
//     // Pause/Play the animation
//     if (entry.isIntersecting) entry.target.style.animationPlayState = "running"
//     else entry.target.style.animationPlayState = "paused"
//   });
// });

// var variableTexts = document.querySelectorAll(".vf-animation");
// variableTexts.forEach(function(el) { observer.observe(el); });
