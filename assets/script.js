// Special characters, letters and numbers
var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialC = ["!", "@", "#", "$", "%", "&", "*", "()", "-", "_", "=", "+", "<", ">", "/", "|", "~", "`", "?", "{", "}", "[", "]"];

// password criteria
function generatePassword() {
  var passwordCriteria
  var inputLength = parseInt(window.prompt("Choose length of characters between 8 & 128"))
    console.log(inputLength);

    if (inputLength < 8 || inputLength > 128) {
      window.alert("Pick a valid number");

     return generatePassword();

    }
// Character Options
    var lowerCase = window.confirm ("Do you want lower case characters in your password?");
      if(lowerCase){
        passwordCriteria=passwordCriteria.concat(lowerC);
      }
    var upperCase = window.confirm ("Do you want upper case characters in your password?");
      if(upperCase){
        passwordCriteria=passwordCriteria.concat(upperC);
      }
    var numeric = window.confirm ("Do you want numbers in your password?");
      if(numeric){
        passwordCriteria=passwordCriteria.concat(numbers);
      }
    var specialChars=window.confirm ("Do you want special characters in your password?");
      if(specialChars){
        passwordCriteria=passwordCriteria.concat(specialC);
      }
    
    var array = [""];
    for (var i=0; i< inputLength; i++){
      var randomIndex = Math.floor(Math.random() * passwordCriteria.length);
      array=array.concat(passwordCriteria[randomIndex]); 
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
