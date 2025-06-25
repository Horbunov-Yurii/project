const form = document.querySelector(".number-form");
const input = document.querySelector(".number-input");
const result = document.querySelector(".number-text");

const secretNumber = Math.floor(Math.random() * 5) + 1;
console.log("Загадане число:", secretNumber); // для тестування

form.addEventListener("submit",(event)=> {
  event.preventDefault();
  const guess = parseInt(input.value.trim());

  if (!isNaN(guess) && guess >= 1 && guess <= 5) {
    if (guess === secretNumber) {
      result.textContent = `Вітаю, ви вгадали число! (${secretNumber})`;
      result.style.color = "green";
    } else {
      result.textContent = "Невірно. Спробуйте ще раз!";
      result.style.color = "red";
    }
   } 
});
