let submitButton = document.getElementById("submitButton");
let email = document.getElementById("email");

submitButton.addEventListener("click", function () {
  let inpObj = document.getElementById("email");
  if (!inpObj.checkValidity()) {
    document.getElementById("invalidInput").innerHTML =
      "Please provide a valid email address";
    email.classList.add("invalidInputBorder");
  } else {
    email.classList.remove("invalidInputBorder");
  }
});
