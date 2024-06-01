const checkButton = document.getElementById("check-btn");
const palindromeInput = document.getElementById("text-input");
const palindromeResultParagraph = document.getElementById("palindrome-result");
const validationParagraph = document.getElementById("validation-paragraph");

const removeNonAlphabeticChars = str => str.replace(/[^a-zA-Z]/g, '');
const reverseInput = (input) => removeNonAlphabeticChars(input).split("").reverse().join("");

const handleButtonClick = () => {
    if(palindromeInput.value === "") {
        validationParagraph.style.display = "block";
    }else validationParagraph.style.display = "none";
}

checkButton.addEventListener("click", handleButtonClick)