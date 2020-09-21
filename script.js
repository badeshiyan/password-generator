// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength = 0;
var pwUpperCase = false;
var pwLowerCase = false;
var pwNumbers = false;
var pwSpecialCharacters = false;

// Write password to the #password input
function writePassword() {
  // section A
  // prompt user to enter length of pw (variable and prompt)
  pwLength = prompt(
    "Please enter length of desired password. Ensure that it is between 8 - 128 characters."
  );
  // validate that value is between 8 - 128 (if else statement)
  if (pwLength >= 8 && pwLength <= 128) {
    alert("Your password meets the length requirement!");
  } else {
    alert("Your password must be between 8 - 128 characters!");
    // exiting the program since user didn't meet pw length requirement
    return 0;
  }
  alert("This is where i am in the code.");
  // Section B
  pwUpperCase = confirm(
    "Would you like for your password to include upper case characters? Select OK for Yes or Cancel for NO"
  );
  pwLowerCase = confirm(
    "Would you like for your password to include lower case characters? Select OK for Yes or Cancel for NO"
  );
  pwNumbers = confirm(
    "Would you like for your password to include numerical characters? Select OK for Yes or Cancel for NO"
  );
  pwSpecialCharacters = confirm(
    "Would you like for your password to include special characters? Select OK for Yes or Cancel for NO"
  );
  if (
    pwUpperCase == false &&
    pwLowerCase == false &&
    pwNumbers == false &&
    pwSpecialCharacters == false
  ) {
    alert(
      "Your password must include one of the four previous character requirements!"
    );
    // exiting the program since user didn't meet pw character type requirement
    return 0;
  }
  // Section C
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  return "Your generated password will appear here.";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
