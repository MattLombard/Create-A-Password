// Assignment code here
var generateBtn = document.querySelector("#generate");

// The variables for the characters that can be used in the password
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberChar = "0123456789"
var specialChar = "~!@#$%^&*()-_=+[{]}|,<.>?"



// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
