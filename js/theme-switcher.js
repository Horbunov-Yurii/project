const toggle = document.getElementById("toggle");
const thumbImage = document.querySelector(".header-day");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  // Змінюємо зображення залежно від теми
  thumbImage.src = isDark ? "./images/night.png" : "./images/day.png";
  thumbImage.alt = isDark ? "Нічна тема" : "Денна тема";
});
