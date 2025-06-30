let selectedOperation = null;

const buttons = document.querySelectorAll(".calculeit-btn");
const inputOne = document.querySelector(".calculeit-input-one");
const inputTwo = document.querySelector(".calculeit-input-two");
const resultInput = document.querySelector(".calculeit-result");
const equalsBtn = document.querySelector(".calculeit-equals");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedOperation = btn.getAttribute("data-operation");
    // buttons.forEach((b) => b.classList.remove("selected"));
    // btn.classList.add("selected");
  });
});

equalsBtn.addEventListener("click", () => {
  const num1 = parseFloat(inputOne.value);
  const num2 = parseFloat(inputTwo.value);

  if (isNaN(num1) || isNaN(num2) || !selectedOperation) {
    resultInput.value = "Помилка";
    return;
  }

  let result;
  switch (selectedOperation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        resultInput.value = "Ділення на 0!";
        return;
      }
      result = num1 / num2;
      break;
  }

  resultInput.value = result;

  // Очищення інпутів і вибору операції
  inputOne.value = "";
  inputTwo.value = "";
  selectedOperation = null;
  buttons.forEach((b) => b.classList.remove("selected"));
});
