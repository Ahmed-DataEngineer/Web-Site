const navbar = document.getElementById("navbar");
const exploreButton = document.getElementById("explore-btn");
const toolsSection = document.getElementById("tools");
let scrollPosition = 0;
const aboutBtn = document.getElementById("about-btn");
const aboutModal = document.getElementById("about-modal");
const closeModalBtn = document.getElementById("close-modal");
const contactBtn = document.getElementById("contact-btn");
const contactModal = document.getElementById("contact-modal");
const closeContactModalBtn = document.getElementById("close-contact-modal");

// JavaScript to handle the opening of the About modal
aboutBtn.addEventListener("click", function () {
  aboutModal.style.display = "flex"; // Show the modal
});

// JavaScript to close the About modal
closeModalBtn.addEventListener("click", function () {
  aboutModal.style.display = "none"; // Hide the modal
});

// JavaScript to handle the opening of the Contact modal
contactBtn.addEventListener("click", function () {
  contactModal.style.display = "flex"; // Show the modal
});

// JavaScript to close the Contact modal
closeContactModalBtn.addEventListener("click", function () {
  contactModal.style.display = "none"; // Hide the modal
});

// JavaScript to handle the showing of tools section and scroll to it
exploreButton.addEventListener("click", function () {
  // Show the tools section
  toolsSection.style.display = "grid";

  // Scroll smoothly to the tools section
  toolsSection.scrollIntoView({
    behavior: "smooth",
  });

  // Fix the navbar to the top when Explore Tools button is clicked
  navbar.classList.add("fixed");
});

// JavaScript to check scroll position
window.addEventListener("scroll", function () {
  // Get the current scroll position
  const currentScrollPosition = window.scrollY;

  // If the user has scrolled back up to the top, remove the fixed class
  if (currentScrollPosition < 100) {
    navbar.classList.remove("fixed");
  } else {
    navbar.classList.add("fixed");
  }
});
