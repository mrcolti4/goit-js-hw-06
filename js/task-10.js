function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  amountInput: document.querySelector("#controls").firstElementChild,
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxWrapper: document.querySelector("#boxes"),
};

const createBoxes = (amount = 0) => {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    refs.boxWrapper.append(box);
  }
};
const onCreate = (event) => {
  createBoxes(refs.amountInput.value);
};
const onDestroy = (event) => {
  refs.boxWrapper.innerHTML = "";
};
refs.createBtn.addEventListener("click", onCreate);
refs.destroyBtn.addEventListener("click", onDestroy);
