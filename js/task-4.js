// Отримуємо елементи форми login-form
const loginForm = document.querySelector('.login-form');

// Додаємо слухача події submit
loginForm.addEventListener('submit', handleLoginFormSubmit);

// Функція для обробки події submit форми входу
function handleLoginFormSubmit(event) {
  event.preventDefault(); // запобігаємо перезавантаженню сторінки
  const form = event.target; // отримуємо доступ до форми
  const formData = {}; // створюємо об'єкт для збер. даних форми

  // Отримуємо всі поля вводу форми та додаємо їх значення до об'єкта formData
  Array.from(form.elements).forEach(element => {
    if (element.type !== 'submit') {
      const inputName = element.name.trim();
      const inputValue = element.value.trim();
      formData[inputName] = inputValue;
    }
  });

  // Перевіряємо, чи поля не порожні
  if (Object.values(formData).some(value => value === '')) {
    return window.alert('All form fields must be filled in');
  }

  console.log(formData);
  form.reset(); // Скидаємо значення всіх полів
}

// Додаємо класи для елементів форми, для стилізації
const labels = loginForm.querySelectorAll('label');
labels.forEach(label => {
  label.classList.add('title-input');
});
const inputs = loginForm.querySelectorAll('input');
inputs.forEach(input => {
  input.classList.add('text-input');
});
const btn = loginForm.querySelector('button');
btn.classList.add('submit-btn');
btn.textContent = 'Log in';
