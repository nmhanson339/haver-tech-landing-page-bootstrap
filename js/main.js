/*
 // Description of file:
 // 
*/

// - - - - - HTML ELEMENTS - - - - -
const contactForm = document.getElementById("euclid-contact");
const contactFormBtn = document.getElementById("GET-submission");
const contactFormStatus = document.getElementById("contact-form-status");
const downloadBtn = document.getElementById("download-btn");
const ctaBtns = document.querySelectorAll(
  ".header-cta-button, .form-cta-button"
);
const ctaLink = document.querySelector(".form-cta-link");
const scrollContainer = document.querySelector(".scroll-container");
const landingPage = document.querySelector(".landing-page");
const formPage = document.querySelector(".form-page");
// - - - - - CONSTANTS AND VARIABLES - - - - -

// - - - - - EVENT LISTENERS - - - - -
// Handle transition to form page
ctaBtns.forEach((btn) => btn.addEventListener("click", scrollToFormPage));

// Handle the form submission event
contactForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  var data = new FormData(contactForm);
  ajax(contactForm.method, contactForm.action, data, success, error);
});

contactForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  downloadBtn.click();
});

// - - - - - FUNCTIONS - - - - -
// Transitions from landing page to form page
function scrollToFormPage() {
  formPage.style.display = "flex";
  // ctaLink.click();
  scrollContainer.scrollTo({
    top: 0,
    left: landingPage.clientWidth,
    behavior: "smooth",
  });
}

// - - - - - FORM FUNCTIONS - - - - -
// Courtesy of FormSpree.com

// Success and Error functions for after the form is submitted
function success() {
  contactForm.reset();
  contactFormBtn.style = "display: none ";
  contactFormStatus.innerHTML = "Happy coding!";
}

function error() {
  contactFormStatus.innerHTML = "Oops! There was a problem.";
}

// Helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
