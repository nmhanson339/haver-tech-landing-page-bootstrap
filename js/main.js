/*
 // Description of file:
 // 
*/

// - - - - - HTML ELEMENTS - - - - -
let contactForm = document.getElementById("euclid-contact");
let contactFormBtn = document.getElementById("GET-submission");
let contactFormStatus = document.getElementById("contact-form-status");
let downloadBtn = document.getElementById("download-btn");
// - - - - - CONSTANTS AND VARIABLES - - - - -

// - - - - - EVENT LISTENERS - - - - -
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
