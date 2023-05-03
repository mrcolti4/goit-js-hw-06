function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

const onColorBtnClick = (event) => {
  const randomColor = getRandomHexColor();
  colorName.textContent = `${randomColor}`;
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
};
changeColorBtn.addEventListener("click", onColorBtnClick);
