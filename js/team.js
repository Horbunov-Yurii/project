const images = document.querySelectorAll(".team__img");
const names = document.querySelectorAll(".team__student-name");
const roles = document.querySelectorAll(".team__work-text");
const pages = document.querySelectorAll(".team__page");
const leftBtn = document.querySelector(".team__btn--left");
const rightBtn = document.querySelector(".team__btn--right");
let idx = 0;

const updateSlider = () => {
  images.forEach((el, i) => el.classList.toggle("team__hidden", i !== idx));
  names.forEach((el, i) => el.classList.toggle("team__hidden", i !== idx));
  roles.forEach((el, i) => el.classList.toggle("team__hidden", i !== idx));
  pages.forEach((el, i) => el.classList.toggle("team__page--curr", i === idx));
};

rightBtn.addEventListener("click", () => {
  if (idx < images.length - 1) {
    idx++;
    updateSlider();
  }
});

leftBtn.addEventListener("click", () => {
  if (idx > 0) {
    idx--;
    updateSlider();
  }
});

updateSlider();


// const members = document.querySelectorAll(".team__item");
// const dots = document.querySelectorAll(".team__dot");
// const left = document.querySelector(".team__btn--left");
// const right = document.querySelector(".team__btn--right");
// let index = 0;

// function updateView() {
//   members.forEach((el, i) => {
//     const isActive = i === index;
//     el.querySelectorAll(".team__img, .team__name, .team__role").forEach(
//       (el) => {
//         el.classList.toggle("team__hidden", !isActive);
//       }
//     );
//     dots[i].classList.toggle("team__dot--active", isActive);
//   });
// }

// left.addEventListener("click", () => {
//   if (index > 0) index--;
//   updateView();
// });

// right.addEventListener("click", () => {
//   if (index < members.length - 1) index++;
//   updateView();
// });

// updateView();