let btn = document.getElementById("loginButton");
let msg = document.getElementById("message");
let form = document.getElementById("loginForm");

let user = document.getElementById("username");
let pass = document.getElementById("password");

function validateInputs() {
  btn.disabled = !(user.value && pass.value);
}

user.addEventListener("input", validateInputs);
pass.addEventListener("input", validateInputs);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (user.value === "corrUsername" && pass.value === "corrPassword") {
    window.location.href = "dashboard.html";
  } 
  else {
    msg.innerText = "Invalid Credentials";
  }
});
