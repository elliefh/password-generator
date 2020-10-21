// Variable declarations
var generateBtn = document.querySelector("#generate");
var up = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spec = ["\"", " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "^", "_", "{", "|", "}", "~", "\]", "`"];  
var chosen = [];
var newPassword = [];

// When the User clicks on the "Generate Password" Button, the User is prompted with a series of questions to specify User's password criteria
function generatePassword() {
    confirm("In order to generate a unique password that matches your security needs, you will need to answer a series of questions regarding your password criteria. Press OK to continue.");

    // First, we prompt user's password length criteria 
    if (confirm) {
        var passwordLength = prompt("Please type a number between 8 and 128 to specify your desired password length.");
        console.log("User chose " + passwordLength + " for password length");

        // If the user provides a number between 8 to 128 characters, we proceed to ask the user's password character criteria 
        if (passwordLength>=8 && passwordLength <=128) {
            var lowercase = confirm("Would you like lowercase characters included in your password?");
            var uppercase = confirm("Would you like uppercase characters included in your password?");
            var numeric = confirm("Would you like numeric characters included in your password?");
            var special = confirm("Would you like special characters included in your password?");
                console.log("User would like to include lowercase characters: " + lowercase);
                console.log("User would like to include uppercase characters: " + uppercase);
                console.log("User would like to include numeric characters: " + numeric);
                console.log("User would like to include special characters: " + special);

            // If the user chooses at least one of the character types, we proceed to generating the password that meets desired password length and character types 
            if (lowercase || uppercase || numeric || special) {       
                alert("You're all set! Generating password...")
                if (lowercase) {
                    chosen = chosen.concat(low);
                }
                if (uppercase) {
                    chosen = chosen.concat(up);
                }
                if (numeric) {
                    chosen = chosen.concat(num);
                }
                if (special) {
                    chosen = chosen.concat(spec);
                }
                console.log("Password will be generated randomly, based on the following characters: " + chosen);

                for (let i = 0; i < passwordLength; i++) {
                    newPassword[i] = chosen[Math.floor(Math.random()*chosen.length)];
                }
                console.log("Generated Password: " + newPassword);

                // Before presenting the user with their new password, we check that generated password matches character type criteria; if it does not, we randomly replace a character to satisfy criteria
                if (lowercase) {
                    var checkLow = [];
                    for (let j = 0; j < newPassword.length; j++) {
                        if (low.indexOf(newPassword[j],0)>-1) {
                            checkLow.push("Yes");
                        }
                    }
                    console.log("Satisfies lowercase characters criteria: " + checkLow);
                    if (checkLow[0]!=="Yes") {
                        newPassword[Math.floor(Math.random()*newPassword.length)] = low[(Math.floor(Math.random()*low.length))];
                    }
                }
                
                if (uppercase) {
                    var checkUp = [];
                    for (let j = 0; j < newPassword.length; j++) {
                        if (up.indexOf(newPassword[j],0)>-1) {
                            checkUp.push("Yes");
                        }
                    }
                    console.log("Satisfies uppercase characters criteria: " + checkUp);
                    if (checkUp[0]!=="Yes") {
                        newPassword[Math.floor(Math.random()*newPassword.length)] = up[(Math.floor(Math.random()*up.length))];
                    }
                }

                if (numeric) {
                    var checkNum = [];
                    for (let j = 0; j < newPassword.length; j++) {
                        if (num.indexOf(newPassword[j],0)>-1) {
                            checkNum.push("Yes");
                        }
                    }
                    console.log("Satisfies numeric characters criteria: " + checkNum);
                    if (checkNum[0]!=="Yes") {
                        newPassword[Math.floor(Math.random()*newPassword.length)] = num[(Math.floor(Math.random()*num.length))];
                    }
                }

                if (special) {
                    var checkSpec = [];
                    for (let j = 0; j < newPassword.length; j++) {
                        if (spec.indexOf(newPassword[j],0)>-1) {
                            checkSpec.push("Yes");
                        }
                    }
                    console.log("Satisfies special characters criteria: " + checkSpec);
                    if (checkSpec[0]!=="Yes") {
                        newPassword[Math.floor(Math.random()*newPassword.length)] = spec[(Math.floor(Math.random()*spec.length))];
                    }
                }
                console.log("Final password: " + newPassword);
            }

            // If the user does not choose any of the above character types, we cannot generate a password. 
            else {
                alert("You need to select at least one character type in order to generate a password.");
                console.log("User did not select any character types.")
            }
        }

        // If the user inputs a number over 128, below 8, or a non-numeric value, we cannot generate a password. 
        else {
            alert("Please type a number between 8 and 128");
            console.log("User did not choose a number between 8 and 128");
        }
    }
}

// executes generate password function + displays the final password 
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
