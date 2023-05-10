// Напиши скрипт, який змінює кольори фону елемента <body> через 
// інлайн-стиль по кліку на button.change-color і виводить значення 
// кольору в span.color.

// Для генерування випадкового кольору використовуй функцію 
// getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.querySelector('body')

btnChangeColor.addEventListener("click", changeColorOfElement);

function changeColorOfElement (event, callback) {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
}

// another variant

// function changeColorOfElement (event, callback) {
// body.style.backgroundColor = getRandomHexColor();
// spanColor.textContent = `${body.style.backgroundColor}`;
// }