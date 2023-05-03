const controlInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const onChangeInput = (event) => {
  text.style.fontSize = `${event.target.value}px`;
};
controlInput.addEventListener("input", onChangeInput);
