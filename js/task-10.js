function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт створення і очищення колекції елементів. Користувач 
// вводить кількість елементів в input і натискає кнопку Створити, 
// після чого рендериться колекція. Натисненням на кнопку Очистити, 
// колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки <div>, скільки вказано в amount і додає їх у 
// div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від 
// попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий 
// спосіб видаляючи всі створені елементи.

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');


function createBoxes(amount) {
  let collection = [];
  for(let i = 0; i <= amount; i += 1){
    const div = document.createElement('div');

    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();

    collection.push(div);
  }
  return collection;
}

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

createBtn.addEventListener("click", () => {

  let elementsToAdd = createBoxes(input.value);
  boxes.append(...elementsToAdd); 
});


destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

