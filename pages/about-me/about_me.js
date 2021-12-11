// HIDE / SHOW
// Examples
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// const openModal = function () {
//   modal.classList.remove('hidden'); // You can even add classes
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden'); //add the hidden class back
//   overlay.classList.add('hidden');
// };

/////  DO IT ////
const leftArrow = document.getElementById('leftArrow');
const closeBtn = document.querySelector('.closeBtn');
const ingredients = document.querySelector('.ingredients');
const comicalPics = document.getElementById('comical-pics');
// const centerContent = document.getElementById('center-content');
const centerPs = document.getElementById('center-Ps');
const moreBtns = document.getElementById('more-btns');
const myPixelPic = document.getElementById('my-pixel-pic');

const titles = document.querySelectorAll('.titles');
// const titles = (document.getElementsByClassName('titles').style.color ='black');
const aboutMe = document.getElementById('about-me');
const boringSide = document.getElementById('boring-side');
const comicalSide = document.getElementById('comical-side');
const bottomSide = document.getElementById('bottom-side');

console.log(titles);

////////// FUNCTIONS //////////////

const openComical = function () {
  centerPs.classList.add('hidden');
  moreBtns.classList.add('hidden');
  myPixelPic.classList.add('hidden');

  comicalPics.classList.remove('hidden');
  // atenuate sides
  aboutMe.style.color = 'hsl(0, 0%, 84%)';
  bottomSide.style.color = 'hsl(0, 0%, 84%)';
  boringSide.style.color = 'hsl(0, 0%, 84%)'; //   document.getElementById('boring-side').style.color = 'gray';
  boringSide.style.textDecoration = 'none';
  //  <   X
  leftArrow.classList.add('hidden');
  closeBtn.classList.remove('hidden');
};
const closeComical = function () {
  centerPs.classList.remove('hidden');
  moreBtns.classList.remove('hidden');
  comicalPics.classList.add('hidden');
  // atenuate sides
  aboutMe.style.color = 'hsl(100, 4%, 14%)';
  bottomSide.style.color = 'hsl(100, 4%, 14%)';
  boringSide.style.color = 'hsl(100, 4%, 14%)'; //   document.getElementById('boring-side').style.color = 'gray';
  boringSide.style.textDecoration = 'underline';
  //  <   X
  leftArrow.classList.remove('hidden');
  closeBtn.classList.add('hidden');
};

///////// WHEN CLICK ////////////
let comicalOpened = 0;
const isComical = function () {
  if (comicalOpened == 0) {
    comicalOpened++;
    openComical();
  } else {
    comicalOpened = 0;
    closeComical();
  }
};

comicalSide.addEventListener('click', isComical);
// if (comicalOpened == 1)
closeBtn.addEventListener('click', closeComical);

//
//
//
//
//
//
//
// BTN CHANGE TEXT ON CLOCK
let btnNum = 1;
let pNum = 1;

const p1 =
  'I come from a Mediterranean village which has an onion as a coat of arms to an island with surplus of Silicon Pies and a chicken as an enemy.';
const p2 =
  ' My perfect day is the day which I learn something new. From learn a eggy technology to a outlandish dish. Btw, friends are a good source.';
const p3 =
  'If my hobbies would count as badges, I will fill my scout jacket pretty soon.';
const p4 =
  'I really appreciated an out-of-box design, listening a open-minder song or watch a non-cliche film is welcomed.';
const p5 = 'You realy want more about me?';
const p6 = 'Really!? The Midnight Gospel is one of my favourite series, too.';
const pComical = 'One photo tells more than a thousand words.';

const btn1 = 'Tell me more';
const btn2 = 'Don’t tell me less';
const btn3 = 'I wanna know more!';
const btn4 = 'Any gossip?';
const btn5 = 'YES';
const btn6 = 'ok...';

function changeText() {
  // paragraph text
  //   document.getElementById('demo').innerText = 'Paragraph changed!';
  pNum++;
  switch (pNum) {
    case 2:
      document.querySelector('.center-p').textContent = `${p2}`;
      break;
    case 3:
      document.querySelector('.center-p').textContent = `${p3}`;
      break;
    case 4:
      document.querySelector('.center-p').textContent = `${p4}`;
      break;
    case 5:
      document.querySelector('.center-p').textContent = `${p5}`;
      break;
    case 6:
      document.querySelector('.center-p').textContent = `${p6}`;
      pNum = 0;
      break;
    case 1:
      document.querySelector('.center-p').textContent = `${p1}`;
      break;
    default:
      document.querySelector('.center-p').textContent = 'error';
      break;
  }
  /////////////
  // btn text
  btnNum++;
  switch (btnNum) {
    case 2:
      document.querySelector('.more-btn').textContent = `${btn2}`;
      break;
    case 3:
      document.querySelector('.more-btn').textContent = `${btn3}`;
      break;
    case 4:
      document.querySelector('.more-btn').textContent = `${btn4}`;
      break;
    case 5:
      document.querySelector('.more-btn').textContent = `${btn5}`;
      break;
    case 6:
      document.querySelector('.more-btn').textContent = `${btn6}`;
      btnNum = 0;
      break;
    case 1:
      document.querySelector('.more-btn').textContent = `${btn1}`;
      break;
    default:
      document.querySelector('.center-p').textContent = 'error';
      break;
  }
}

//
//
//
//
//
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
