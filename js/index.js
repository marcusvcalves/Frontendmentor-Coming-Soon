const email = document.getElementById("emailInput");
const form = document.getElementById("form");
const invalidInput = document.getElementById("invalidInput");

form.addEventListener("submit", (e) => {
  let messages = [];

  if (email.value === "" || email.value == null) {
    messages.push("Please provide a valid email address");
  }
  if (messages.length > 0) {
    e.preventDefault();
    invalidInput.innerText = messages.join(", ");
  }
});
