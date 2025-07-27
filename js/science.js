const scientists = [
  { name: "Albert", surname: "Einstein", born: 1879, dead: 1955 },
  { name: "Karl", surname: "Friedrich", born: 1727, dead: 1792 },
  { name: "August", surname: "Mobius", born: 1790, dead: 1868 },
  { name: "Marie", surname: "Curien", born: 1867, dead: 1934 },
  { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630 },
  { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543 },
  { name: "Nikolay", surname: "Zelinsky", born: 1861, dead: 1953 },
  { name: "Igor", surname: "Kurchatov", born: 1903, dead: 1960 },
  { name: "Konstantin", surname: "Tsiolkovsky", born: 1857, dead: 1935 },
  { name: "Nikolay", surname: "Zhukovsky", born: 1847, dead: 1921 },
  { name: "Norbert", surname: "Wiener", born: 1894, dead: 1964 },
  { name: "Nikolay", surname: "Pirogov", born: 1810, dead: 1881 },
];

const buttons = document.querySelectorAll(
  ".science__button, .science__button2"
);


const items = document.querySelectorAll(".science__item");

const clearHighlight = () => {
  items.forEach((item) => {
    item.style.background = "#d9d9d9";
  });
};

buttons[0].addEventListener("click", () => {
  clearHighlight();
  scientists
    .filter((s) => s.born >= 1801 && s.born <= 1900)
    .forEach((scientist) => {
      items.forEach((item) => {
        if (item.textContent.includes(scientist.name)) {
          item.style.background = "rgba(0, 0, 0, 0.5)";
        }
      });
    });
});

buttons[1].addEventListener("click", () => {
  clearHighlight();
  items.forEach((item) => {
    if (item.textContent.includes("Albert")) {
      item.style.background = "rgba(0, 0, 0, 0.5)";
    }
  });
});

buttons[2].addEventListener("click", () => {
  clearHighlight();
  const sorted = [...items].sort((a, b) =>
    a.textContent.trim().localeCompare(b.textContent.trim())
  );
  document.querySelector(".science__list").replaceChildren(...sorted);
});

buttons[3].addEventListener("click", () => {
  clearHighlight();
  scientists
    .filter((s) => s.surname.startsWith("C"))
    .forEach((scientist) => {
      items.forEach((item) => {
        if (item.textContent.includes(scientist.name)) {
          item.style.background = "rgba(0, 0, 0, 0.5)";
        }
      });
    });
});

buttons[4].addEventListener("click", () => {
  clearHighlight();

  const sorted = [...items].sort((a, b) => {
    const scientistA = scientists.find((s) => a.textContent.includes(s.name));
    const scientistB = scientists.find((s) => b.textContent.includes(s.name));

    if (scientistA && scientistB) {
      const ageA = scientistA.dead - scientistA.born;
      const ageB = scientistB.dead - scientistB.born;
      return ageB - ageA;
    }
    return 0;
  });

  document.querySelector(".science__list").replaceChildren(...sorted);
});

buttons[5].addEventListener("click", () => {
  clearHighlight();
  items.forEach((item) => {
    const name = item.textContent.trim().split(" ")[0];
    if (name.startsWith("A")) {
      item.style.background = "rgba(0, 0, 0, 0.5)";
    }
  });
});

buttons[6].addEventListener("click", () => {
  clearHighlight();

  items.forEach((item) => {
    if (item.textContent.includes("Olga")) {
      item.style.background = "rgba(0, 0, 0, 0.5)";
    }
  });
});

buttons[7].addEventListener("click", () => {
  clearHighlight();
  const oldest = scientists.reduce((oldest, s) =>
    s.dead - s.born > oldest.dead - oldest.born ? s : oldest
  );
  const youngest = scientists.reduce((youngest, s) =>
    s.dead - s.born < youngest.dead - youngest.born ? s : youngest
  );
  items.forEach((item) => {
    if (
      item.textContent.includes(oldest.name) ||
      item.textContent.includes(youngest.name)
    ) {
      item.style.background = "rgba(0, 0, 0, 0.5)";
    }
  });
});

buttons[8].addEventListener("click", () => {
  clearHighlight();
  scientists
    .filter((s) => s.name[1] === s.surname[1])
    .forEach((scientist) => {
      items.forEach((item) => {
        if (item.textContent.includes(scientist.name)) {
          item.style.background = "rgba(0, 0, 0, 0.5)";
        }
      });
    });
});


// const scientists = [
//   { name: "Albert", surname: "Einstein", born: 1879, dead: 1955 },
//   { name: "Karl", surname: "Friedrich", born: 1727, dead: 1792 },
//   { name: "August", surname: "Mobius", born: 1790, dead: 1868 },
//   { name: "Marie", surname: "Curien", born: 1867, dead: 1934 },
//   { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630 },
//   { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543 },
//   { name: "Nikolay", surname: "Zelinsky", born: 1861, dead: 1953 },
//   { name: "Igor", surname: "Kurchatov", born: 1903, dead: 1960 },
//   { name: "Konstantin", surname: "Tsiolkovsky", born: 1857, dead: 1935 },
//   { name: "Nikolay", surname: "Zhukovsky", born: 1847, dead: 1921 },
//   { name: "Norbert", surname: "Wiener", born: 1894, dead: 1964 },
//   { name: "Nikolay", surname: "Pirogov", born: 1810, dead: 1881 },
// ];

// const buttons = document.querySelectorAll(
//   ".science__button, .science__button2"
// );
// const items = document.querySelectorAll(".science__item");
// const itemContainer = document.querySelector(".science__list");

// const highlightItems = (predicate) => {
//   clearHighlight();
//   items.forEach((item) => {
//     if (predicate(item)) {
//       item.style.background = "rgba(0, 0, 0, 0.5)";
//     }
//   });
// };

// const clearHighlight = () => {
//   items.forEach((item) => (item.style.background = "#d9d9d9"));
// };

// const getScientistByItem = (item) =>
//   scientists.find((s) => item.textContent.includes(s.name));

// const sortItemsAlphabetically = () => {
//   const sorted = [...items].sort((a, b) =>
//     a.textContent.trim().localeCompare(b.textContent.trim())
//   );
//   itemContainer.replaceChildren(...sorted);
// };

// const sortByAgeDesc = () => {
//   const sorted = [...items].sort((a, b) => {
//     const sa = getScientistByItem(a);
//     const sb = getScientistByItem(b);
//     return sa && sb ? sb.dead - sb.born - (sa.dead - sa.born) : 0;
//   });
//   itemContainer.replaceChildren(...sorted);
// };

// const findOldestAndYoungest = () => {
//   const oldest = scientists.reduce((a, b) =>
//     b.dead - b.born > a.dead - a.born ? b : a
//   );
//   const youngest = scientists.reduce((a, b) =>
//     b.dead - b.born < a.dead - a.born ? b : a
//   );
//   highlightItems(
//     (item) =>
//       item.textContent.includes(oldest.name) ||
//       item.textContent.includes(youngest.name)
//   );
// };

// const buttonActions = [
//   () => {
//     // Born in 1801–1900
//     highlightItems((item) => {
//       return scientists.some(
//         (s) =>
//           s.born >= 1801 && s.born <= 1900 && item.textContent.includes(s.name)
//       );
//     });
//   },
//   () => {
//     // Only Albert
//     highlightItems((item) => item.textContent.includes("Albert"));
//   },
//   () => {
//     // Sort alphabetically
//     sortItemsAlphabetically();
//   },
//   () => {
//     // Surname starts with C
//     highlightItems((item) => {
//       return scientists.some(
//         (s) => s.surname.startsWith("C") && item.textContent.includes(s.name)
//       );
//     });
//   },
//   () => {
//     // Sort by age descending
//     sortByAgeDesc();
//   },
//   () => {
//     // Name starts with A
//     highlightItems((item) => item.textContent.trim().startsWith("A"));
//   },
//   () => {
//     // Includes Olga
//     highlightItems((item) => item.textContent.includes("Olga"));
//   },
//   () => {
//     // Oldest and youngest
//     findOldestAndYoungest();
//   },
//   () => {
//     // Second letter of name equals second letter of surname
//     highlightItems((item) => {
//       return scientists.some(
//         (s) => s.name[1] === s.surname[1] && item.textContent.includes(s.name)
//       );
//     });
//   },
// ];

// // Прив'язка кнопок до дій
// buttons.forEach((btn, index) => {
//   btn.addEventListener("click", buttonActions[index]);
// });