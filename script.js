const checkButton = document.getElementById("check-btn");
const palindromeInput = document.getElementById("text-input");
const palindromeResultParagraph = document.getElementById("result");
const validationParagraph = document.getElementById("validation-paragraph");

let firstValue;
let secondValue;

const removeNonAlphabeticChars = str => str.replace(/[^a-zA-Z0-9]/g, '');
const reverseInput = (input) => removeNonAlphabeticChars(input).split("").reverse().join("");

const checkPalindrome = (firstValue, secondValue) => firstValue.toLowerCase() === secondValue.toLowerCase() ? true : false;

const handleButtonClick = () => {
    if(palindromeInput.value === "") {
        alert("Please input a value")
        validationParagraph.style.display = "block";
        palindromeResultParagraph.innerText = ""
    }else {
        validationParagraph.style.display = "none";
        firstValue = reverseInput(palindromeInput.value);
        secondValue = removeNonAlphabeticChars(palindromeInput.value);
        if(checkPalindrome(firstValue, secondValue)) {
            palindromeResultParagraph.innerText = `${palindromeInput.value} is a palindrome`
        }else palindromeResultParagraph.innerText = `${palindromeInput.value} is not a palindrome`
    }
        
}

checkButton.addEventListener("click", handleButtonClick)