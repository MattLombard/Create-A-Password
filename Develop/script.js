// Assignment code here
var generateBtn = document.querySelector("#generate");

// The variables for the characters that can be used in the password
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberChar = "0123456789"
var specialChar = "~!@#$%^&*()-_=+[{]}|,<.>?"

//Define function to generate the password
function generatePassword() {
  //after pressing generate password ask the user to input number
  var passwordLength = parseInt(prompt("Please type a number between 8 and 128: "))
  // if they do not input a number, the alert will pop up and return null
  if (isNaN(passwordLength)) {
    alert("Must input a number")
    return null;
  }
// if they input a number outside of the range, alert will pop up and return null
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid number! ")
    return null;
  }
// Confirm-  ask the user if they want lowercase, uppercse, numbers and special characters in the password
  var hasLower = confirm("Do you want lowercase letters in your password? ")
  var hasUpper = confirm("Do you want uppercase letters in your password? ")
  var hasNumbers = confirm("Do you want numbers in your password? ")
  var hasSpecial = confirm("Do you want special characters in your password?")

  // Creates a string to store the characters that will be used in the password
  var passwordCharacters = ""
  //Adds the characters for each type of character selected to the passwordCharacters string
  if (lowercaseChar) {
    passwordCharacters += lowercaseChar;
  }

  if (hasUpper) {
    passwordCharacters += uppercaseChar
  }

  if (hasNum) {
    passwordCharacters += numberChar
  }

  if (hasSpecial) {
    passwordCharacters += specialChar
  }

}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
