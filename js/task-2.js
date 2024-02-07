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
  {
    url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];
// Отримуємо елемент gallery і додаємо стилі
const list = document.querySelector('.gallery');
list.style.display = 'flex';
list.style.flexWrap = 'wrap';
list.style.columnGap = '24px';
list.style.rowGap = '48px';

// Отримуємо і створюємо елементи li через insertAdjacentHTML
const listItem = images
  .map(
    image => `<li class="list-item">
  <img src="${image.url}" alt="${image.alt}" width=" 360" height="300"/> </li>`
  )
  .join('');
list.insertAdjacentHTML('beforeend', listItem);

// Отримуємо усі елементи list-item і додаємо ширину для сітки
const items = document.querySelectorAll('.list-item');
items.forEach(item => {
  item.style.width = 'calc((100% - 48px) / 3)';
});

// Створюємо новий div елемент
const divForList = document.createElement('div');
// Додаємо клас до нового div елементу
divForList.classList.add('gallery-container');
// Вставляємо ul елемент внутрішнім вмістом нового div елементу
divForList.appendChild(list);
// Отримуємо посилання на body елемент
const bodyElement = document.body;
// Вставляємо новий div елемент перед скриптом
bodyElement.insertBefore(divForList, document.querySelector('script'));
// Додаємо стилі до div елемента
divForList.style.width = '1440px';
divForList.style.height = '848px';
divForList.style.padding = '100px 156px';
divForList.style.backgroundColor = '#fff';
