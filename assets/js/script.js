"use strict";

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Function to check all inputs
function checkInputs() {
  const allFilled = Array.from(formInputs).every(
    (input) => input.value.trim() !== ""
  );
  formBtn.disabled = !allFilled;
}

// Add event listeners to inputs
formInputs.forEach((input) => input.addEventListener("input", checkInputs));

// Select navigation links and pages
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add click event listener to each navigation link
navigationLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    const targetPage = this.innerHTML.toLowerCase();

    // Loop through each page to toggle "active" class based on the target page
    pages.forEach((page) => {
      const isActive = page.dataset.page === targetPage;
      page.classList.toggle("active", isActive);
    });

    // Loop through each navigation link to toggle "active" class
    navigationLinks.forEach((link) => {
      link.classList.toggle("active", link === navLink);
    });

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  });
});
