const choices = ["stone", "scissors", "paper"];
const userChoices = document.querySelectorAll(".paper-img");
const scoreSpans = document.querySelectorAll(".paper-scope");
const resultText = document.querySelector(".paper-text");

let computerScore = 0;
let userScore = 0;

// Отримуємо хід комп’ютера
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Визначаємо результат гри
function getResult(user, computer) {
  if (user === computer) return "draw";
  if (
    (user === "stone" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "stone")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

// Обробка кліку по вибору користувача
userChoices.forEach((img) => {
  img.addEventListener("click", () => {
    const userChoice = img.alt;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    if (result === "win") {
      userScore++;
      resultText.textContent = `Ви виграли! Комп’ютер обрав ${computerChoice}.`;
      resultText.style.color = "green";
    } else if (result === "lose") {
      computerScore++;
      resultText.textContent = `Ви програли! Комп’ютер обрав ${computerChoice}.`;
      resultText.style.color = "red";
    } else {
      resultText.textContent = `Нічия! Обидва обрали ${userChoice}.`;
      resultText.style.color = "orange";
    }

    // Оновлюємо рахунок
    scoreSpans[0].textContent = computerScore;
    scoreSpans[1].textContent = userScore;
  });
});
