// Функція для генерації випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Створюємо тег <link> для підключення шрифту Montserrat
const preconnectLink1 = document.createElement('link');
preconnectLink1.rel = 'preconnect';
preconnectLink1.href = 'https://fonts.googleapis.com';
document.head.appendChild(preconnectLink1);
const preconnectLink2 = document.createElement('link');
preconnectLink2.rel = 'preconnect';
preconnectLink2.href = 'https://fonts.gstatic.com';
preconnectLink2.crossOrigin = 'true';
document.head.appendChild(preconnectLink2);
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap';
document.head.appendChild(fontLink);

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

// Стилі
bodyStyle.style.fontFamily = "'Montserrat', sans-serif";
bodyStyle.style.color = '#2e2f42';
bodyStyle.style.fontWeight = '400';
bodyStyle.style.fontSize = '16px';
bodyStyle.style.letterSpacing = '0.04em';
widgetBox.style.borderRadius = '8px';
widgetBox.style.padding = '100px 88px';
widgetBox.style.width = '345px';
widgetBox.style.height = '280px';
widgetBox.style.backgroundColor = '#fff';
btnChangeColor.style.borderRadius = '8px';
btnChangeColor.style.padding = '8px 16px';
btnChangeColor.style.width = '148px';
btnChangeColor.style.height = '40px';
btnChangeColor.style.background = '#4e75ff';
btnChangeColor.style.color = '#fff';
btnChangeColor.style.fontWeight = '500';
btnChangeColor.style.border = 'none';
btnChangeColor.style.cursor = 'pointer';
// Додаємо стилі при наведенні на кнопку
btnChangeColor.addEventListener('mouseover', function () {
  btnChangeColor.style.backgroundColor = '#6c8cff';
});
// Повертаємо стилі при відведенні
btnChangeColor.addEventListener('mouseout', function () {
  btnChangeColor.style.backgroundColor = '#4e75ff';
});
