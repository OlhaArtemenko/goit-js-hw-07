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
// Додаємо шрифт і колір в body
const bodyStyle = document.querySelector('body');
bodyStyle.style.fontFamily = "'Montserrat', sans-serif";
bodyStyle.style.fontWeight = '400';
bodyStyle.style.fontSize = '16px';
bodyStyle.style.lineHeight = '1.5';
bodyStyle.style.letterSpacing = '0.04em';
bodyStyle.style.color = '#2e2f42';

// Отримуємо доступ до елементів
const body = document.querySelector('body');
const controlsDiv = body.querySelector('#controls');
const input = controlsDiv.querySelector('input');
const createBtn = controlsDiv.querySelector('[data-create]');
const destroyBtn = controlsDiv.querySelector('[data-destroy]');
const boxesContainer = body.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value, 10);
  if (!isNaN(amount) && amount >= 1 && amount <= 100) {
    clearBoxes();
    let boxSize = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      boxSize += 10;
    }
    input.value = '';
  }
});

destroyBtn.addEventListener('click', () => {
  clearBoxes();
});

function clearBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// Змінюємо атрибути input
input.type = 'text';
input.removeAttribute('min');
input.removeAttribute('max');
input.removeAttribute('step');
input.setAttribute('pattern', '[0-9]*');
input.setAttribute('inputmode', 'numeric');

// Стилі
controlsDiv.style.borderRadius = '8px';
controlsDiv.style.padding = '32px';
controlsDiv.style.width = '486px';
controlsDiv.style.height = '104px';
controlsDiv.style.backgroundColor = '#f6f6fe';
controlsDiv.style.display = 'flex';
controlsDiv.style.justifyContent = 'center';
controlsDiv.style.gap = '16px';
controlsDiv.style.marginBottom = '16px';

input.style.border = '1px solid #808080';
input.style.borderRadius = '8px';
input.style.padding = '8px';
input.style.width = '150px';
input.style.height = '40px';
input.style.textAlign = 'center';
input.style.backgroundColor = 'transparent';
input.style.outline = 'transparent';

createBtn.style.borderRadius = '8px';
createBtn.style.padding = '8px 16px';
createBtn.style.width = '120px';
createBtn.style.height = '40px';
createBtn.style.backgroundColor = '#4e75ff';
createBtn.style.fontWeight = '500';
createBtn.style.color = '#fff';
createBtn.style.border = 'none';
createBtn.style.cursor = 'pointer';
// Додаємо стилі при наведенні на createBtn
createBtn.addEventListener('mouseover', function () {
  createBtn.style.backgroundColor = '#6c8cff';
});
// Повертаємо стилі при відведенні від createBtn
createBtn.addEventListener('mouseout', function () {
  createBtn.style.backgroundColor = '#4e75ff';
});

destroyBtn.style.borderRadius = '8px';
destroyBtn.style.padding = '8px 16px';
destroyBtn.style.width = '120px';
destroyBtn.style.height = '40px';
destroyBtn.style.color = '#fff';
destroyBtn.style.fontWeight = '500';
destroyBtn.style.backgroundColor = '#ff4e4e';
destroyBtn.style.border = 'none';
destroyBtn.style.cursor = 'pointer';
// Додаємо стилі при наведенні на destroyBtn
destroyBtn.addEventListener('mouseover', function () {
  destroyBtn.style.backgroundColor = '#ff7070';
});
// Повертаємо стилі при відведенні від destroyBtn
destroyBtn.addEventListener('mouseout', function () {
  destroyBtn.style.backgroundColor = '#ff4e4e';
});

boxesContainer.style.display = 'flex';
boxesContainer.style.flexDirection = 'row';
boxesContainer.style.flexWrap = 'wrap';
boxesContainer.style.gap = '16px';
boxesContainer.style.borderRadius = '8px';
boxesContainer.style.padding = '32px';
boxesContainer.style.minHeight = '160px';
boxesContainer.style.minWidth = '486px';
boxesContainer.style.backgroundColor = '#f6f6fe';
