const listOfCategories = document.querySelector("#categories");
const titlesOfCategories = listOfCategories.querySelectorAll(".item");

console.log(`Number of categories: ${titlesOfCategories.length}`);

const countCategoryElements = (category) => {
  const categoryItems = category.querySelectorAll("li");
  const title = category.firstElementChild.textContent;
  console.log(`Category: ${title}\nElements: ${categoryItems.length}`);
};

titlesOfCategories.forEach(countCategoryElements);
