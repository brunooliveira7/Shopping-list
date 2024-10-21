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
  //duplicate else if

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
             </li>
                <button class="remove" onclick="removeItem(${i})">
                    <img src="./assets/bin.svg" alt="Delete item" />
                </button>
             </li>
         </ol>
      `;
    list.innerHTML += listItem;
  }
}

//keep items on page refresh
showValues();

//removes items from the list when the button is clicked
function removeItem() {}
