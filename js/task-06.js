const textInput = document.querySelector("#validation-input");
const onValidateInput = (event) => {
  if (event.target.value.length >= event.target.dataset.length) {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  } else {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
  }
  console.log(event.target.value.length, event.target.dataset.length);
};
textInput.addEventListener("blur", onValidateInput);
