// Special characters, letters and numbers
var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialC = ["!", "@", "#", "$", "%", "^", "&", "*", "()", "-", "_", "=", "+", "<", ">", "/", "|", "?", "{", "}", "[", "]"];

// password criteria
function passwordCriteria() {
  var inputLength = parseInt(window.prompt("Choose length of characters between 8 & 128"))
    console.log(inputLength);

    if (inputLength < 8 || inputLength > 128) {
      window.alert("Pick a valid number");

      passwordCriteria();
    }

// click for desired criteria
    var lowerCase = window.confirm ("Do you want lower case characters in your password?")

    var upperCase = window.confirm ("Do you want upper case characters in your password?")

    var numeric = window.confirm ("Do you want numbers in your password?")

    var specialChars = window.confirm ("Do you want special characters in your password?")
    
if (lowerCase || upperCase || numeric || specialChars) {
  window.alert("Please select a character type to meet criteria")

  passwordCriteria()
  // return passwordCriteria;
return;
}
else{
  var userInput = {
    inputLength: inputLength,
    lowerCase: lowerCase,
    upperCase: upperCase,
    numeric: numeric,
    specialC: specialC,
  }
}
return userInput
}

function selectRandom (array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  var randomEl = array[randomIndex]

  return randomEl;
}

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
