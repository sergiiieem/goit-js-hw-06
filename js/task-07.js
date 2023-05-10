// Напиши скрипт, який реагує на зміну значення 
// input#font-size-control (подія input)
// і змінює інлайн-стиль span#text, оновлюючи властивість 
// font-size. В результаті, перетягуючи повзунок, буде змінюватися 
// розмір тексту.



const rangeInput = document.querySelector('input[type="range"]');
const output = document.querySelector('#text');

rangeInput.addEventListener('input', setStyleAttributeToOutput);

function setStyleAttributeToOutput(event) {
    output.style.fontSize = `${event.target.value}px` 
}

