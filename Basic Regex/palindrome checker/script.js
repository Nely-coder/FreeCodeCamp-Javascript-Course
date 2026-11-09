const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function checkPalindrome() {
  const originalText = textInput.value;

  if (originalText.trim() === "") {
    alert("Please input a value");
    return;
  }

  const cleanedText = originalText.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedText = cleanedText.split("").reverse().join("");

  if (cleanedText === reversedText) {
    result.textContent = `${originalText} is a palindrome`;
  } else {
    result.textContent = `${originalText} is not a palindrome`;
  }
}

checkBtn.addEventListener("click", checkPalindrome);
