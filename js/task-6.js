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

// Додаємо класи для стилізації
input.classList.add('input-number-form');
createBtn.classList.add('create-btn');
destroyBtn.classList.add('destroy-btn');
