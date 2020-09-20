// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;

// Write password to the #password input
function writePassword() {
  // section A
  // prompt user to enter length of pw (variable and prompt)
  var pwLength = prompt("Please Enter Length of Desired Password");
  // let user know in prompt that length should be between 8 - 128 (prompt)
  var pwLngthRqrmt = prompt(
    "Password Length Must Be Between 8 - 128 Characters"
  );
  // validate that value is between 8 - 128 (if else statement)
  if (pwLnghthRqrmt) {
    alert("Your Password Meets the Password Length Requirement!");
  } else {
    alert("Your Password Must Be Between 8 - 128 Characters!");
  }
  // if validation fails, user needs to be alerted (alert)
  alert("Your Password Could Not Be Validated - Please Try Again!");
  // Section B

  // Section C
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  return "This will be replaced by my generated password.";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
