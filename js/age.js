const form = document.querySelector(".age-form");
const input = document.querySelector(".age-input");
const resultText = document.querySelector(".age-text");

form.addEventListener("submit", (event)=> {
  event.preventDefault();
  const year = parseInt(input.value.trim());

  if (!isNaN(year) && year > 0) {
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    if (isLeap) {
      resultText.textContent = "Ти народився у високосний рік!";
      resultText.style.color = "green";
    } else {
      resultText.textContent = "Ти народився не у високосний рік.";
      resultText.style.color = "red";
    }
  } else {
    resultText.textContent = "Будь ласка, введіть коректний рік.";
    resultText.style.color = "orange";
  }
});