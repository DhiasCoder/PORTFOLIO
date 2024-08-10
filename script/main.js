// Toogle & Responsive Navigation
const navSlide = () => {
  const burger = document.getElementsByClassName("burger")[0];
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

//Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// Scroll effect
if (window.location.hash) {
  window.history.replaceState(null, null, window.location.pathname);
}

window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});

// Loading Spinner
window.addEventListener("load", () => {
const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden")

  loader.addEventListener("transitionend", ()=> {
    document.body.removeChild(loader);
  });
});