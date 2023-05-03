const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createListItems = (list = []) => {
  return list.map((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.textContent = item;
    return listItem;
  });
};
const listOfIngredients = document.querySelector("#ingredients");
listOfIngredients.append(...createListItems(ingredients));
