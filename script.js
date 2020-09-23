// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength = 0;
var pwUpperCase = false;
var pwLowerCase = false;
var pwNumbers = false;
var pwSpecialCharacters = false;

// Write password to the #password input
function writePassword() {
  // prompt user to enter length of generated password
  pwLength = prompt(
    "Please enter length of desired password. Ensure that it is between 8 - 128 characters."
  );
  // validate that value is between 8 - 128
  if (pwLength < 8 || pwLength > 128) {
    alert("Your password must be between 8 - 128 characters!");
    // exiting the program since user didn't meet password length requirement
    return 0;
  }

  // prompt user to select desired character type for generated password
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
  // validate that at least one of the character types has been selected
  if (
    pwUpperCase == false &&
    pwLowerCase == false &&
    pwNumbers == false &&
    pwSpecialCharacters == false
  ) {
    alert(
      "Your password must include one of the four previous character requirements!"
    );
    // exiting the program since user didn't meet password character type requirement
    return 0;
  }

  // generate password based on user selected criteria
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
  var numbers = "0123456789".split("");
  var specialCharacters = ` !"#$%&'()*+,-./:;<=>?@[\]^_{|}~""`.split("");
  var userChosenCharacters = [];
  var newPassword = [];
  var num = 0;

  // include an upperCase character in the password if this character set has been selected by user
  if (pwUpperCase == true) {
    for (let i = 0; i < upperCaseLetters.length; i++) {
      userChosenCharacters.push(upperCaseLetters[i]);
    }
    num = Math.floor(Math.random() * upperCaseLetters.length);
    newPassword.push(upperCaseLetters[num]);
  }

  // include an lowerCase character in the password if this character set has been selected by user
  if (pwLowerCase == true) {
    for (let i = 0; i < lowerCaseLetters.length; i++) {
      userChosenCharacters.push(lowerCaseLetters[i]);
    }
    num = Math.floor(Math.random() * lowerCaseLetters.length);
    newPassword.push(lowerCaseLetters[num]);
  }

  // include a numerical character in the password if this character set has been selected by user
  if (pwNumbers == true) {
    for (let i = 0; i < numbers.length; i++) {
      userChosenCharacters.push(numbers[i]);
    }
    num = Math.floor(Math.random() * numbers.length);
    newPassword.push(numbers[num]);
  }

  // include a special character in the password if this character set has been selected by user
  if (pwSpecialCharacters == true) {
    for (let i = 0; i < specialCharacters.length; i++) {
      userChosenCharacters.push(specialCharacters[i]);
    }
    num = Math.floor(Math.random() * specialCharacters.length);
    newPassword.push(specialCharacters[num]);
  }

  // complete the password with characters from the user selected character sets
  for (let i = newPassword.length; i < pwLength; i++) {
    num = Math.floor(Math.random() * userChosenCharacters.length);
    newPassword.push(userChosenCharacters[num]);
  }

  // randomly sort the elements of the password array
  newPassword.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  console.log(newPassword);

  // convert password array into a string
  var finalPassword = newPassword.join("");
  console.log(finalPassword);

  // return generated password that matches the selected criteria
  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
