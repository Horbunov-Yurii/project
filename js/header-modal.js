
  const modal = document.getElementById("welcomeModal");
  const closeButton = document.querySelector(".modal-close");
  const form = document.getElementById("nameForm");
  const input = document.getElementById("userNameInput");
  const headerName = document.getElementById("headerUserName");


  // Закриваємо модальне вікно по кнопці "Х"
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Обробка форми
  form.addEventListener("submit",(event)=> {
    event.preventDefault();
    const name = input.value.trim();
    if (name) {
      headerName.textContent = name;
      modal.style.display = "none";
    }
  });

