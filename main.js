const localStorageKey = "to-do-item";

function newItem() {
  let input = document.querySelector("#input-new-item");

  //validation
  if (!input.value.trim()) {
    alert("Please enter a non-empty item");
    return;
  }
  //duplicate else if
  //increment to localStorage - convert string to array
  else {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    values.push({
      name: input.value.trim(),
    });
    //convert array to string
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    showValues();
  }
}

//show values
function showValues() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let list = document.querySelector(".content-body");

    //start empty list
    list.innerHTML = "";

    //runs through all elements of the value
    for(let i = 0; i < values.length; i++) {
        //get the current element and its name
        let = listItem = `
         <ul id="to-do-list">
             <li>
                <input type="checkbox" id="checked"/>
                <span>${values[i]["name"]}</span>
             </li>    
             </li>
                <button class="remove" onclick="removeItem(${i})">
                    <img src="./assets/bin.svg" alt="Delete item" />
                </button>
             </li>
         </ul>
      `;
      list.innerHTML += listItem;
    }
}

//keep items on page refresh
showValues()