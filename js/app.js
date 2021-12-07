//Function to get rid the preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preload-finish");
});
