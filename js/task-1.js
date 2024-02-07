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

// Отримуємо елемент #categories
const categoriesList = document.getElementById('categories');
// Отримуємо всі елементи .item у списку #categories
const categoryItems = categoriesList.querySelectorAll('.item');
// Виводимо кількість категорій в консоль
console.log(`Number of categories: ${categoryItems.length}`);

// Проходимо по кожному елементу .item та додаємо до них стилі
categoryItems.forEach(categoryItem => {
  categoryItem.style.backgroundColor = '#f6f6fe';
  categoryItem.style.borderRadius = '8px';
  categoryItem.style.padding = '16px';
  categoryItem.style.width = '392px';
  categoryItem.style.height = 'auto';
  categoryItem.style.marginBottom = '24px';

  // Отримуємо текст h2 для кожної категорії
  const categoryName = categoryItem.querySelector('h2').textContent;

  // Отримуємо всі елементи li у поточній категорії
  const categoryElements = categoryItem.querySelectorAll('ul > li');
  // Проходимо по кожному елементу li та додаємо них стилі
  categoryElements.forEach(categoryElement => {
    categoryElement.style.width = '360px';
    categoryElement.style.height = '40px';
    categoryElement.style.border = '1px solid #808080';
    categoryElement.style.borderRadius = '4px';
    categoryElement.style.padding = '8px 16px';
  });

  // Отримуємо всі елементи ul.item та додаємо до них стилі
  const categoryULs = categoryItem.querySelectorAll('ul');
  categoryULs.forEach(ulElement => {
    ulElement.style.paddingLeft = '0';
    ulElement.style.marginTop = '16px';
    ulElement.style.display = 'flex';
    ulElement.style.flexDirection = 'column';
    ulElement.style.gap = '8px';
  });
  // Виводимо назву категорії і кількість елементів в консоль
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
