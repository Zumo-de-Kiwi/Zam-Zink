const leftArrow = document.getElementById('leftArrow');
const closeBtn = document.querySelector('.closeBtn');
const boringBtn = document.querySelector('.boringBtn');
const ingredients = document.querySelector('.ingredients');
const comicalPics = document.getElementById('comical-pics');
// const centerContent = document.getElementById('center-content');
const centerPs = document.getElementById('center-Ps');
const moreBtns = document.getElementById('more-btns');
const innerWrapper = document.querySelector('.innerWrapper'); // this is the Character text myPixelPic
const footer = document.querySelector('#footer-inside');

const titles = document.querySelectorAll('.titles');
const aboutMe = document.getElementById('about-me');
const boringSide = document.getElementById('boring-side');
const comicalSide = document.getElementById('comical-side');
const bottomSide = document.getElementById('bottom-side');
console.log(ingredients);

////////// FUNCTIONS ////////////////

/// to footer SMOOTH SCROOL ///
bottomSide.addEventListener('click', function (e) {
  footer.scrollIntoView({ behavior: 'smooth' });
});

/////////////////// COMICAL //////////////////
const openComical = function () {
  centerPs.classList.add('hidden');
  moreBtns.classList.add('hidden');
  innerWrapper.classList.add('hidden');
  // textChar.classList.add('hidden');

  comicalPics.classList.remove('hidden');
  // atenuate sides
  aboutMe.style.color = 'hsl(0, 0%, 84%)';
  bottomSide.style.color = 'hsl(0, 0%, 84%)';
  boringSide.style.color = 'hsl(0, 0%, 84%)';
  boringSide.style.textDecoration = 'none';
  //  <   X
  leftArrow.classList.add('hidden');
  closeBtn.classList.remove('hidden');
  comicalSide.style.fontVariationSettings = "'MONO' 1, 'CASL' 0.7,'wght' 620";
};
const closeComical = function () {
  centerPs.classList.remove('hidden');
  moreBtns.classList.remove('hidden');
  innerWrapper.classList.remove('hidden');

  comicalPics.classList.add('hidden');
  // atenuate sides
  aboutMe.style.color = 'hsl(100, 4%, 14%)';
  bottomSide.style.color = 'hsl(100, 4%, 14%)';
  boringSide.style.color = 'hsl(100, 4%, 14%)';
  boringSide.style.textDecoration = 'underline';
  //  <   X
  leftArrow.classList.remove('hidden');
  closeBtn.classList.add('hidden');
  // VF
  comicalSide.style.fontVariationSettings = "'MONO' 1, 'CASL' 0.1, 'wght' 500";
};

//////////////// BORING SIDE ///////////////////
const openBoring = function () {
  centerPs.classList.add('hidden');
  moreBtns.classList.add('hidden');
  innerWrapper.classList.add('hidden');
  // textChar.classList.add('hidden');

  ingredients.classList.remove('hidden');
  // atenuate sides
  aboutMe.style.color = 'hsl(0, 0%, 84%)';
  bottomSide.style.color = 'hsl(0, 0%, 84%)';
  comicalSide.style.color = 'hsl(0, 0%, 84%)';
  comicalSide.style.textDecoration = 'none';
  //  <   X
  leftArrow.classList.add('hidden');
  closeBtn.classList.remove('hidden');
  // boringBtn.classList.remove('hidden');
  boringSide.style.fontVariationSettings = "'MONO' 1, 'CASL' 0,'wght' 620";
};
const closeBoring = function () {
  centerPs.classList.remove('hidden');
  moreBtns.classList.remove('hidden');
  innerWrapper.classList.remove('hidden');

  comicalPics.classList.add('hidden');
  ingredients.classList.add('hidden');
  // atenuate sides
  aboutMe.style.color = 'hsl(100, 4%, 14%)';
  bottomSide.style.color = 'hsl(100, 4%, 14%)';
  comicalSide.style.color = 'hsl(100, 4%, 14%)';
  comicalSide.style.textDecoration = 'underline';
  //  <   X
  leftArrow.classList.remove('hidden');
  closeBtn.classList.add('hidden');
  // boringBtn.classList.add('hidden');
  // VF
  boringSide.style.fontVariationSettings = "'MONO' 1, 'CASL' 0.1, 'wght' 500";
};

///////// WHEN CLICK ////////////
//// Cobined func
let comicalOpened = 0;
let boringOpened = 0;
const openOrClose = function (whoClicked) {
  // WhoClicked -> boring = 1, comic= 2, xBtn = 3 error = 0
  console.log(whoClicked);
  // when boring is clicked
  if (whoClicked == 1) {
    // when the two are closed
    if (boringOpened == 0 && comicalOpened == 0) {
      boringOpened = 1;
      openBoring();
    } // when boring closed and comical open
    else if (boringOpened == 0 && comicalOpened == 1) {
      comicalOpened = 0;
      closeComical();
      boringOpened = 1;
      openBoring();
    } //when boring opened and comical closed
    else if (boringOpened == 1 && comicalOpened == 0) {
      boringOpened = 0;
      closeBoring();
    }
  } // when COMICAL is clicked
  else if (whoClicked == 2) {
    // when the two are closed
    if (boringOpened == 0 && comicalOpened == 0) {
      comicalOpened = 1;
      openComical();
    } // when boring closed and comical open
    else if (boringOpened == 0 && comicalOpened == 1) {
      comicalOpened = 0;
      closeComical();
    } //when boring opened and comical closed
    else if (boringOpened == 1 && comicalOpened == 0) {
      boringOpened = 0;
      closeBoring();
      comicalOpened = 1;
      openComical();
    }
  }
  /// Xbtn clicked
  else if (whoClicked == 3) {
    // when the two are closed
    if (boringOpened == 0 && comicalOpened == 0) {
    } // when boring closed and comical open
    else if (boringOpened == 0 && comicalOpened == 1) {
      comicalOpened = 0;
      closeComical();
    } //when boring opened and comical closed
    else if (boringOpened == 1 && comicalOpened == 0) {
      boringOpened = 0;
      closeBoring();
    }
  }
  /// Xbtn clicked
  else if (whoClicked == 4) {
    // when the two are closed
    if (boringOpened == 0 && comicalOpened == 0) {
    } // when boring closed and comical open
    else if (boringOpened == 0 && comicalOpened == 1) {
      comicalOpened = 0;
      closeComical();
    } //when boring opened and comical closed
    else if (boringOpened == 1 && comicalOpened == 0) {
      boringOpened = 0;
      closeBoring();
    }
  } else {
    console.log('This is an Hérror message. 😳');
  }
  console.log(boringOpened, comicalOpened);
};
const boringPressed = function () {
  openOrClose(1);
};
const comicalPressed = function () {
  openOrClose(2);
};
const closeBtnPressed = function () {
  openOrClose(3);
};
const aboutMePressed = function () {
  openOrClose(4);
};

boringSide.addEventListener('click', boringPressed);
comicalSide.addEventListener('click', comicalPressed);
closeBtn.addEventListener('click', closeBtnPressed);
aboutMe.addEventListener('click', aboutMePressed);

///////////////////////////////
///////////////////////////////
// BTN CHANGE TEXT ON CLOCK ///
///////////////////////////////
let btnNum = 1;
let pNum = 1;

const p1 =
  'I come from a town where all the proper names ends up with "ll". To another where circling a stick will make you end up with a a cotton candy.';
// Take a bamboo stick and take a circle outside and you will get marshmallows
// with surplus of Silicon Pies and a chicken as an enemy
const p2 =
  ' My perfect day is when I learn something new, from an eggy technology to an outlandish dish. Btw, friends are a good source of learning and inspiration.';
const p3 =
  'If my hobbies counted as badges, I would fill my scout jacket pretty soon.';
const p4 =
  'I really enjoy contemplating an out-of-box design, listening to an open-minded song or watching a non-cliché film.';
const p5 = 'Do you really wish to know more about me?';
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
