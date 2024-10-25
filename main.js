//localStorage key name
const localStorageKey = "to-do-item";

//captures values ​​entered in the input and when clicked on the btn
function newItem() {
  let input = document.querySelector("#input-new-item");

  //validation - empty
  if (!input.value.trim()) {
    alert("Please enter a non-empty item");
    return;
  }
  //no duplicate
  else if (validadeIfExistsNewItem()) {
    alert("Item already exists");
    return;
  }

  //increment to localStorage - convert string to array or empty array
  else {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    //inserting the typed into the object
    values.push({
      name: input.value.trim(),
    });
    //converts the array to a string value object
    localStorage.setItem(localStorageKey, JSON.stringify(values));

    showValues();
  }
  //clear input
  input.value = "";
}

function validadeIfExistsNewItem() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let inputValue = document.querySelector("#input-new-item").value;
  let exists = values.find((x) => x.name == inputValue);
  return !exists ? false : true;
}

//show the values ​​in the list
function showValues() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let list = document.querySelector(".content-body");

  //start empty list
  list.innerHTML = "";

  //loops through all the elements of the array values
  for (let i = 0; i < values.length; i++) {
    //get the current element and its name
    let = listItem = `
         <ol id="to-do-list">
             <li>
                <input type="checkbox" id="checked"/>
                <span>${values[i]["name"]}</span>
             </li>    
             <li>
                <button class="remove" onclick="removeItem('${values[i]["name"]}')"> 
                    <img src="./assets/bin.svg" alt="Delete item" />
                </button>
             </li>
         </ol>
      `;
    //increments values ​​to display in the list - so it doesn't look like just one in the list
    list.innerHTML += listItem;
  }
}

//removes items from the list when the button is clicked
//data = item name
function removeItem(data) {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");

  //search for the value and its index if it is equal to the parameter
  let index = values.findIndex((x) => x.name == data);

  //delete 1 item from the list
  values.splice(index, 1);

  //remove item from localStorage only
  localStorage.setItem(localStorageKey, JSON.stringify(values));

  //updates and removes the item from the list
  showValues();

  showAlert();
}

function showAlert() {
  const alertMessage = document.querySelector(".alert-message");

  // Add the 'open' class to show the alert
  alertMessage.classList.add("open");

  // Hide the alert after 3 seconds
  setTimeout(() => {
    alertMessage.classList.remove("open");
  }, 3000);
}

// Function to close the alert when the close button is clicked
document
  .querySelector(".alert-message .close")
  .addEventListener("click", function () {
    const alertMessage = document.querySelector(".alert-message");

    if (alertMessage) {
      alertMessage.classList.remove("open");
    }
  });

//keep items on page refresh
showValues();
