// Отримуємо значення елемента #name-input
const formInput = document.querySelector('#name-input');
formInput.classList.add('input-name');
// Отримуємо значення елемента #name-output
const nameOutput = document.querySelector('#name-output');

// Створюємо EventListener
formInput.addEventListener('input', event => {
  const inputValue = event.currentTarget.value.trim(); // отримуємо поточне значення з input та очищаємо його від пробілів по краях
  const outputValue = inputValue !== '' ? inputValue : 'Anonymous'; // перевірка, чи input не є порожнім або не містить лише пробіли
  nameOutput.textContent = outputValue; // підставляємо значення в span#name-output
});

// Отримуємо значення елемента h1 та додаємо клас для стилізації
const title = document.querySelector('h1');
title.classList.add('title-hello');
