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

// Отримуємо значення елемента #name-input та додаємо стилі
const formInput = document.querySelector('#name-input');
formInput.style.width = '360px';
formInput.style.height = '40px';
formInput.style.marginBottom = '16px';
formInput.style.marginTop = '24px';
formInput.style.padding = '8px 16px';
formInput.style.fontFamily = '"Montserrat", sans-serif';
formInput.style.fontWeight = '400';
formInput.style.fontSize = '16px';
formInput.style.lineHeight = '1.5';
formInput.style.letterSpacing = '0.04em';
formInput.style.color = '#2e2f42';
formInput.style.border = '1px solid #808080';
formInput.style.borderRadius = '4px';
formInput.style.outline = 'transparent';
// Додаємо стилі при наведенні на formInput
formInput.addEventListener('mouseover', function () {
  formInput.style.border = '1px solid #000';
});
// Повертаємо стилі при відведенні
formInput.addEventListener('mouseout', function () {
  formInput.style.border = '1px solid #808080';
});
// Повертаємо стилі при активному стані formInput
formInput.addEventListener('mousedown', function () {
  formInput.style.border = '1px solid #808080';
});

// Отримуємо значення елемента #name-output
const nameOutput = document.querySelector('#name-output');
// Створюємо EventListener
// Отримуємо поточне значення з input та очищаємо його від пробілів по краях
// Перевірка, чи input не є порожнім або не містить лише пробіли
// Підставляємо значення в span#name-output
formInput.addEventListener('input', event => {
  const inputValue = event.currentTarget.value.trim();
  const outputValue = inputValue !== '' ? inputValue : 'Anonymous';
  nameOutput.textContent = outputValue;
});
// Отримуємо значення елемента h1 та додаємо стилі
const title = document.querySelector('h1');
title.style.fontFamily = '"Montserrat", sans-serif';
title.style.fontWeight = '600';
title.style.fontSize = '24px';
title.style.lineHeight = '1.33333';
title.style.letterSpacing = '0.04em';
title.style.color = '#2e2f42';
