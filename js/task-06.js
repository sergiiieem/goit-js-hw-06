// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в 
// його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту 
// стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, 
// які ми вже додали у вихідні файли завдання.


// const textInput = document.querySelector('#validation-input');
// const dataLength = textInput.getAttribute("data-length")

// textInput.addEventListener('blur', (event) => {
//     event.preventDefault();
//     if(textInput.value.length == dataLength){
//         textInput.classList.remove("invalid")
//         textInput.classList.add('valid');
//     }
//     else {
//         textInput.classList.remove("valid")
//         textInput.classList.add('invalid');
//     }
// });

const textInput = document.querySelector('#validation-input');
const dataLength = textInput.getAttribute("data-length")

textInput.addEventListener('blur', onInputEvent);

function onInputEvent(event) {
    event.preventDefault();
    if(textInput.value.length == dataLength){
        textInput.classList.remove("invalid")
        textInput.classList.add('valid');
    }
    else {
        textInput.classList.remove("valid")
        textInput.classList.add('invalid');
    }
};
