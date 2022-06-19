function contact() {
  let name = prompt("What is your name?");
  let age = prompt("How old are you?");
  let email = prompt("What is your e-mail?");
  let h2 = document.querySelector("h2");
  if (age >= 16) {
    h2.innerHTML =
      "Welcome " +
      name +
      " 😍! <br> Soon you'll receive an invitation to a masterclass";
  } else {
    h2.innerHTML =
      "Hello " + name + " 🎈! <br> We'll soon contact your parents! ";
  }
}

let button = document.querySelector("button");
button.addEventListener("click", contact);

function scrollToTop() {
  window.scrollTo(0, 0);
}
