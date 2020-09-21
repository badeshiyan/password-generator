// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength = 0;

// Write password to the #password input
function writePassword() {
  // section A
  // prompt user to enter length of pw (variable and prompt)
  pwLength = prompt(
    "Please Enter Length of Desired Password. Ensure that It Is Between 8 - 128 Characters."
  );
  // validate that value is between 8 - 128 (if else statement)
  if (pwLength >= 8 && pwLength <= 128) {
    alert("Your Password Meets the Length Requirement!");
  } else {
    alert("Your Password Must Be Between 8 - 128 Characters!");
    // exiting the program since user didn't meet pw length requirement
    return 0;
  }
  alert("This is where i am in the code.");
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
