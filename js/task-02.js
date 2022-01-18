const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listOfIngredientsRef = document.querySelector('#ingredients');

const CreatesSeparateElement = elements => {
  return elements.map(element => {
    const listRef = document.createElement('li');
    listRef.textContent = element;
    listRef.classList.add('item');
    return listRef;
  });
};
const separateElements = CreatesSeparateElement(ingredients);
listOfIngredientsRef.append(...separateElements);
