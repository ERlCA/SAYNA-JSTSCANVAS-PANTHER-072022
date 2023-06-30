const topButton = document.querySelector(".top-button");

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  if (hamburger.classList.contains('activated'))
    hamburger.classList.remove('activated');
  else hamburger.classList.add("activated");

  if (nav.classList.contains("visible"))
    nav.classList.remove("visible");
  else nav.classList.add("visible");
});

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const topButtonFunc = () => {
  let currentScroll = window.scrollY;
  let vh = window.innerHeight * 0.01; // calculate 1vh

  if (currentScroll > (window.innerHeight * 0.01 * 50)) {
    topButton.classList.add("pop-up")
  }
  else topButton.classList.remove("pop-up");
};

window.addEventListener("scroll", topButtonFunc);