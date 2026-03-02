let failCount = 0;

function handleSubmit() 
{
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var emailError = document.getElementById("email-error");
  var passwordError = document.getElementById("password-error");
  var attemptBox = document.getElementById("attempt-box");

  emailError.innerHTML = "";
  passwordError.innerHTML = "";

  var isValid = true;

  if (email === "") {
    emailError.innerHTML = "Email is required.";
    isValid = false;
  } else if (!email.includes("@")) {
    emailError.innerHTML = "Email must contain '@'.";
    isValid = false;
  }

  if (password === "") {
    passwordError.innerHTML = "Password is required.";
    isValid = false;
  } else if (password.length < 6) {
    passwordError.innerHTML = "Password must be at least 6 characters.";
    isValid = false;
  } else if (!password.includes("#")) {
    passwordError.innerHTML = "Password must contain '#'.";
    isValid = false;
  }

  if (!isValid) {
    failCount++;
    attemptBox.innerHTML = "Invalid form submissions: " + failCount;
  } else {
    attemptBox.innerHTML = "";
    alert("Login successful!");
  }
}