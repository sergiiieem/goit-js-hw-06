// Використовуй масив об'єктів images для створення елементів <img>,
// вкладених в <li>. Для створення розмітки використовуй шаблонні рядки 
// і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію 
// додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS 
// класи.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryEl = document.querySelector('.gallery');
// const elements = images.map(option => {
//   const liEl = document.createElement('li');
//   liEl.classList.add('list');
//   const imageEl = document.createElement('img');
//   imageEl.src = option.url;
//   imageEl.alt = option.alt;
//   imageEl.width = 320;

//   liEl.append(imageEl);
//   galleryEl.append(liEl);
  
//   galleryEl.style.display = 'flex';
//   galleryEl.style.gap = '15px';
//   galleryEl.style.listStyle = 'none';
//   imageEl.style.backgroundSize = 'contain';
//   });



const galleryEl = document.querySelector(".gallery");

const createGallery = images
.map((image) =>
  `<li><img src="${image.url}" alt="${image.alt}" width ="320"></li>`
)
// .join("");

galleryEl.insertAdjacentHTML("beforeend", createGallery)

  galleryEl.style.display = 'flex';
  galleryEl.style.gap = '15px';
  galleryEl.style.listStyle = 'none';


