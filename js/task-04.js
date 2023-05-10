// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
//  та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// const counterEl = document.querySelector('#counter');
const counterEl = document.querySelector('#value');
let value = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
    value -= 1;
    counterEl.textContent = value;
});

incrementBtn.addEventListener('click', () => {
    value += 1;
    counterEl.textContent = value;
});


