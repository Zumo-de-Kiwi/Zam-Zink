//Change the text width with different screen sizes
function fluidAxisVariation() {
  //Current vieport width
  const windowWidth = window.innerWidth;

  // Get new scales for viewwport and  font weigth
  const viewportScale = (windowWidth - 320) / (1440 - 320);
  const fontWeigthScale = viewportScale * (450 - 730) + 730; //from 450 to 730 weight
  console.log(fontWeigthScale);
  // Set in CSS using CSS custom Property
  p.style.setProperty("--main-weight", fontWeigthScale);
}
