// Special characters, letters and numbers
var chars = "!@#$%^&*()-_=+<>{}[]abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

// password criteria
function passwordCriteria() {
  inputLength = window.prompt("Choose length of characters between 8 & 128")
    console.log(passwordLength);

    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Pick a valid number");
  }
}

// click for lowercase, uppercase, numbers and special characters
    var lowerCase = window.confirm ("Do you want lower case characters in your password?")
    var upperCase = window.confirm ("Do you want upper case characters in your password?")
    var numeric = window.confirm ("Do you want numbers in your password?")
    var SpecialChars = window.confirm ("Do you want special characters in your password?")
    



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
