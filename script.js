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
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
  var numbers = "0123456789".split("");
  var specialCharacters = ` !"#$%&'()*+,-./:;<=>?@[\]^_{|}~""`.split("");
  var userChosenCharacters = [];
  var newPassword = [];
  var num = 0;

  if (pwUpperCase == true) {
    for (let i = 0; i < upperCaseLetters.length; i++) {
      userChosenCharacters.push(upperCaseLetters[i]);
    }
    num = Math.floor(Math.random() * upperCaseLetters.length);
    newPassword.push(upperCaseLetters[num]);
    // console.log(num);
    // console.log(upperCaseLetters[num]);
  }

  if (pwLowerCase == true) {
    for (let i = 0; i < lowerCaseLetters.length; i++) {
      userChosenCharacters.push(lowerCaseLetters[i]);
    }
    num = Math.floor(Math.random() * lowerCaseLetters.length);
    newPassword.push(lowerCaseLetters[num]);
  }

  if (pwNumbers == true) {
    for (let i = 0; i < numbers.length; i++) {
      userChosenCharacters.push(numbers[i]);
    }
    num = Math.floor(Math.random() * numbers.length);
    newPassword.push(numbers[num]);
  }

  if (pwSpecialCharacters == true) {
    for (let i = 0; i < specialCharacters.length; i++) {
      userChosenCharacters.push(specialCharacters[i]);
    }
    num = Math.floor(Math.random() * specialCharacters.length);
    newPassword.push(specialCharacters[num]);
  }
  // console.log(newPassword);
  for (let i = newPassword.length; i < pwLength; i++) {
    num = Math.floor(Math.random() * userChosenCharacters.length);
    newPassword.push(userChosenCharacters[num]);
  }
  // console.log(newPassword);
  newPassword.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  console.log(newPassword);

  var finalPassword = newPassword.join("");
  console.log(finalPassword);
  return "Your generated password will appear here.";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
