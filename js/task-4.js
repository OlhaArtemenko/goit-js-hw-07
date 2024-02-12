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
bodyStyle.style.color = '#2e2f42';
bodyStyle.style.fontWeight = '400';
bodyStyle.style.fontSize = '16px';
bodyStyle.style.letterSpacing = '0.04em';

// Отримуємо елементи форми login-form та додаємо стилі
const registerForm = bodyStyle.querySelector('.login-form');
registerForm.style.width = '408px';
registerForm.style.borderRadius = '8px';
registerForm.style.padding = '24px';
registerForm.style.height = '256px';
registerForm.style.background = '#fff';
registerForm.style.display = 'flex';
registerForm.style.flexDirection = 'column';
registerForm.style.gap = '8px';

// Отримуємо всі елементи label в межах форми та додаємо стилі
const labels = registerForm.querySelectorAll('label');
labels.forEach(label => {
  label.style.display = 'flex';
  label.style.flexDirection = 'column';
  label.style.gap = '8px';
});

// Отримуємо всі елементи input в межах форми та додаємо стилі
const inputs = registerForm.querySelectorAll('input');
inputs.forEach(input => {
  input.style.borderRadius = '4px';
  input.style.width = '360px';
  input.style.height = '40px';
  input.style.padding = '8px 16px';
  input.style.color = '#2e2f42';
  input.style.border = '1px solid #808080';
  // Додаємо стилі при наведенні
  input.addEventListener('mouseover', function () {
    input.style.border = '1px solid #000';
    input.style.outline = 'transparent';
  });
  // Повертаємо стилі при відведенні
  input.addEventListener('mouseout', function () {
    input.style.border = '1px solid #808080';
  });
  // Повертаємо стилі при активному стані
  input.addEventListener('mousedown', function () {
    input.style.border = '1px solid #808080';
  });
});
// Отримуємо елемент button в межах форми та додаємо стилі
const btn = registerForm.querySelector('button');
btn.style.backgroundColor = '#4e75ff';
btn.style.borderRadius = '8px';
btn.style.padding = '8px 16px';
btn.style.width = '86px';
btn.style.height = '40px';
btn.style.border = 'none';
btn.style.fontWeight = '500';
btn.style.color = '#fff';
btn.style.marginTop = '8px';
btn.textContent = 'Log in';
// Додаємо стилі при наведенні
btn.addEventListener('mouseover', function () {
  btn.style.backgroundColor = '#6c8cff';
});
// Повертаємо стилі при відведенні
btn.addEventListener('mouseout', function () {
  btn.style.backgroundColor = '#4e75ff';
});

// Додаємо слухача події submit
registerForm.addEventListener('submit', handleSubmit);
// Створюємо функцію для обробники події submit
function handleSubmit(event) {
  event.preventDefault(); // запобігаємо перезавантаженню сторінки
  const form = event.target; // отримуємо доступ до форми
  const email = form.elements.email.value; // отримуємо значення даних з поля форми для пошти
  const password = form.elements.password.value; // отримуємо значення даних з поля форми для пароля
  // Перевіряємо, чи хоча б одне з полів не є порожнім рядком
  if (email === '' || password === '') {
    return window.alert('All form fields must be filled in');
  }
  // Створюємо обʼєкт для зберігання даних форми
  const formData = {};
  // Отримайте всі елементи форми
  const formElements = form.elements;
  // Проходимо по всім елементам форми і додаємо їх значення в об'єкт
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i]; // отримуємо поточний елемент форми в кожній ітерації циклу
    // Отримуємо ім'я та значення поточного елемента форми та видаляємо пробіли з початку та кінця рядку
    const inputName = element.name.trim();
    const inputValue = element.value.trim();
    formData[inputName] = inputValue; // додаємо пари ключ-значення до об'єкта formData
  }
  console.log(formData);
  form.reset(); // скидаємо значення всіх полів
}
