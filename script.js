const checkButton = document.getElementById("check-btn");
const palindromeInput = document.getElementById("text-input");
const palindromeResultParagraph = document.getElementById("palindrome-result");

const removeNonAlphabeticChars = str => str.replace(/[^a-zA-Z]/g, '');