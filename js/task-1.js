// Отримуємо елемент #categories
const categoriesList = document.querySelector('#categories');
// Отримуємо всі елементи .item у списку #categories
const categoryItems = categoriesList.querySelectorAll('.item');
// Виводимо кількість категорій в консоль
console.log(`Number of categories: ${categoryItems.length}`);

// Проходимо по кожному елементу .item
categoryItems.forEach(categoryItem => {
  const categoryName = categoryItem.querySelector('h2').textContent; // отримуємо текст h2 для кожної категорії
  const categoryElements = categoryItem.querySelectorAll('ul > li'); // отримуємо всі елементи li у поточній категорії
  categoryElements.forEach(categoryElement => {
    categoryElement.classList.add('item-element'); // проходимо по кожному елементу li та додаємо клас
  });
  const categoryULs = categoryItem.querySelectorAll('ul');
  categoryULs.forEach(ulElement => {
    ulElement.classList.add('ul-list-element');
  }); // отримуємо всі елементи ul.item та додаємо до них клас

  // Виводимо назву категорії і кількість елементів в консоль
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
