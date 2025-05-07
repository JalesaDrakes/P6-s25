function init() {
  console.log("Page loaded. Adding event listeners.");

  document.getElementById("btn1").addEventListener("click", buttonOneClicked);
  document.getElementById("btn2").addEventListener("click", buttonTwoClicked);
  document.getElementById("ctaButton").addEventListener("click", ctaButtonClicked);

  document.getElementById("contactForm").addEventListener("submit", formSubmitted);
}

function buttonOneClicked() {
  document.getElementById("output").innerHTML = "You clicked Button 1!";
}

function buttonTwoClicked() {
  document.getElementById("output").innerHTML = "You clicked Button 2!";
}

function ctaButtonClicked() {
  document.getElementById("output").innerHTML = "You clicked Get Started!";
}

function formSubmitted(event) {
  event.preventDefault(); 

  var name = document.forms["contactForm"]["username"].value;
  var password = document.forms["contactForm"]["password"].value;
  var selection = document.forms["contactForm"]["selection"].value;

  document.getElementById("output").innerHTML =
    "<strong>Form Submitted!</strong><br>" +
    "Name: " + name + "<br>" +
    "Password: " + password + "<br>" +
    "Selection: " + selection;
}
