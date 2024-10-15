const form = document.querySelector("form");
const itemInput = document.getElementById("itemInput");
const itemList = document.getElementById("itemList");

//input - capta o valor digitado no input
//manipular o input para receber somente string
itemInput.addEventListener("input", () => {
  const nonCharacterRegex = /[^a-zA-Z]+/g;

  itemInput.value = itemInput.value.replace(nonCharacterRegex, "");
});

form.onsubmit = (event) => {
  event.preventDefault();

  const itemName = itemInput.value.trim();

  if (itemName === "") {
    return;
  }

  const newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.innerHTML = ` <input type="checkbox" name="" id="checked" />
                        <label for="checked">Pão de forma</label>
                        <button><img src="./assets/bin.svg" alt="" /></button>`;

  itemList.appendChild(newItem);

  itemInput.value = "";

  newItem.querySelector(".delete-btn").addEventListener("click", () => {
    newItem.remove();
  });
};
