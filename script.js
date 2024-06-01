const checkButton = document.getElementById("check-btn");
const palindromeInput = document.getElementById("text-input");
const palindromeResultParagraph = document.getElementById("palindrome-result");

let finalInput;

const removeNonAlphabeticChars = str => str.replace(/[^a-zA-Z]/g, '');
const reverseInput = (input) => removeNonAlphabeticChars(input).split("").reverse().join("");
