const refs = {
  inputName: document.querySelector("#name-input"),
  labelName: document.querySelector("#name-output"),
};

const onInputChange = (event) => {
  refs.labelName.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : "Anonymous";
};

refs.inputName.addEventListener("input", onInputChange);
