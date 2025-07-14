let currentIndex = 0;
const cards = document.getElementById("cards");
const totalCards = cards.children.length;

function move(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = totalCards - 1;
  if (currentIndex >= totalCards) currentIndex = 0;
  cards.style.transform = `translateX(-${currentIndex * 100}%)`;
}
