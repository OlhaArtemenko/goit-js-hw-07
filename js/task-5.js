// Функція для генерації випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо доступ до елементів
const bodyStyle = document.querySelector('body');
const widgetBox = bodyStyle.querySelector('.widget');
const btnChangeColor = widgetBox.querySelector('.change-color');
const colorSpan = widgetBox.querySelector('.color');

// Додаємо слухача події при натисканні на кнопку
btnChangeColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyStyle.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
