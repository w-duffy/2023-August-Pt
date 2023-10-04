// NOT SRP
function processWordCommand(cmd, word) {
    if (cmd === "reverseWord") {
        return word.split('').reverse().join('');
    } else if (cmd === "toUpperCase") {
        return word.toUpperCase();
    } else if (cmd === "countLetters") {
        return word.length;
    } else if (cmd === "isPalindrome") {
        const reversedWord = word.split('').reverse().join('');
        return word === reversedWord;
    } else {
        console.log("Command not found");
    }
}

//NOT DRY

function identifyNumber(number) {
    if (number === 1) {
      console.log("Number is 1");
    } else if (number === 2) {
      console.log("Number is 2");
    } else if (number === 3) {
      console.log("Number is 3");
    } else if (number === 4) {
      console.log("Number is 4");
    } else {
      console.log("Number not found");
    }
  }
  

//DRY
  function identifyNumber(number) {
    if (number >= 1 && number <= 4) {
      console.log(`Number is ${number}`);
    } else {
      console.log("Number not found");
    }
  }
