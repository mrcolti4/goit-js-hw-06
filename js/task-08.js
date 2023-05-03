const loginForm = document.querySelector(".login-form");
const onSubmitForm = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Заповніть поля!");
  }
  console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
};
loginForm.addEventListener("submit", onSubmitForm);
