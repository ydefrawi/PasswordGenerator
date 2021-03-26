// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase;
var upperCase;
var numeric;
var special;
var passLength;
console.log(generateBtn)


function passwordLength() {
passLength = prompt("How many characters would you like your password to be? Please enter between 8 and 120 characters");
if (passLength < 8 || passLength > 120) {
  prompt("Please enter a number between 8 and 120 characters!")
}
}

function criteria() {
   lowerCase = confirm ("Do you want to include lower case characters? ");
   upperCase = confirm ("Do you want to include upper case characters? ");
   numeric = confirm ("Do you want to include numeric characters? ");
   special = confirm ("Do you want to include special characters?");
 }

//Arrays of characters
 var lowerCaseOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't' , 'u', 'v'];
 var upperCaseOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'];
 var numericOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 var specialOptions = ["~", "@", "#", "$", "%", "^", "&", "<", ">", "(", ")","+","-", "?", "!", "." ]
 var bigArray = [];

console.log(bigArray); 


// var superPassword = ""
// for (i=0; i<passLength; i++){
// superPassword =+ bigArray[Math.floor(Math.random()*bigArray.length)];
// }



function writePassword() {
  passwordLength();
  criteria();
  //Array Concatenator! Adds each successive array to 'bigArray" depending on what the user selected
  if (upperCase===true){
    bigArray = bigArray.concat(upperCaseOptions)
    console.log("upper" + bigArray);
  }

  if (lowerCase===true){
      bigArray = bigArray.concat(lowerCaseOptions)
      console.log("lower" + bigArray);
  }

  if (numeric===true){
    bigArray = bigArray.concat(bigArray, numericOptions)
    console.log("numbers" + bigArray);
  }

  if (special===true){
    bigArray = bigArray.concat(bigArray, specialOptions)
    console.log("special" + bigArray);
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 