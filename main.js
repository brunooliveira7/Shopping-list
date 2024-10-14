const form = document.querySelector("form");
const itemInput = document.getElementById("itemInput");

//input - capta o valor digitado no input
//manipular o input para receber somente string
itemInput.addEventListener("input", () => {
  const nonCharacterRegex = /[^a-zA-Z]+/g;

  itemInput.value = itemInput.value.replace(nonCharacterRegex, "");
});

