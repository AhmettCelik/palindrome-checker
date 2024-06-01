const checkButton = document.getElementById("check-btn");
const palindromeInput = document.getElementById("text-input");
const palindromeResultParagraph = document.getElementById("palindrome-result");
const validationParagraph = document.getElementById("validation-paragraph");

let firstValue;
let secondValue;

const removeNonAlphabeticChars = str => str.replace(/[^a-zA-Z]/g, '');
const reverseInput = (input) => removeNonAlphabeticChars(input).split("").reverse().join("");

const checkPalindrome = (firstValue, secondValue) => firstValue === secondValue ? true : false;

const handleButtonClick = () => {
    if(palindromeInput.value === "") {
        validationParagraph.style.display = "block";
        palindromeResultParagraph.innerText = ""
    }else {
        validationParagraph.style.display = "none";
        firstValue = reverseInput(palindromeInput.value);
        secondValue = removeNonAlphabeticChars(palindromeInput.value);
        if(checkPalindrome(firstValue, secondValue)) {
            palindromeResultParagraph.innerText = "Yes! It's a palindrome!"
        }else palindromeResultParagraph.innerText = "No! It's not a palindrome"
    }
        
}

checkButton.addEventListener("click", handleButtonClick)