const allCategoriesRef = document.querySelectorAll('.item');
const numberOfCategoriesRef = allCategoriesRef.length;
console.log(`Number of categories: ${numberOfCategoriesRef}`);

allCategoriesRef.forEach(category => {
  const headerTextRef = category.firstElementChild.textContent;
  console.log(`Category: ${headerTextRef}`);

  const numberOfElementsRef = category.lastElementChild.querySelectorAll('li').length;
  console.log(`Elements: ${numberOfElementsRef}`);
});
