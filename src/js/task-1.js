const button = document.querySelector("#button");
const inputField = document.querySelector("#text-field");

button.addEventListener("click", () => {
  button.textContent = inputField.value;
});
