const form = document.querySelector("form");
const itemInput = document.getElementById("itemInput");

itemInput.addEventListener("input", (event) => {
    event.preventDefault();
    console.log(event)
});