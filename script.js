function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const hireMeButton = document.getElementById("hireMeButton");


link1.addEventListener("click", () => {
  scrollToElement(".services");
});

link2.addEventListener("click", () => {
  scrollToElement(".skills");
});

link3.addEventListener("click", () => {
  scrollToElement(".projects");
});

link4.addEventListener("click", () => {
  scrollToElement(".column");
});

hireMeButton.addEventListener("click", () => {
  scrollToElement(".column");
});

const toggleButton = document.getElementById("navbar-toggle");
const closeButton = document.getElementById("close-button");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

closeButton.addEventListener("click", () => {
  navLinks.classList.remove("active");
});





