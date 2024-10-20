class Product {
  constructor() {
    this.arrayItems = [];
  }

  addItem() {
    //pegando o objeto do captureData e jogando dentro da var item
    let item = this.captureData();

    //se o dado foi preenchido então add o item ao arrayItems
    if (this.validateData(item)) {
      this.addArrayItem(item);
    }
    console.log(this.arrayItems);
  }

  // adiciona dentro do array o item
  addArrayItem(item) {
    this.arrayItems.push(item);
  }

  // captura os dados digitados
  captureData() {
    //objeto
    let item = {};

    //vai jogar dentro do objeto item como uma propriedade, itemName, o que foi digitado
    item.itemName = document.getElementById("itemInput").value;

    //retornando o objeto{}
    return item;
  }

  validateData(item) {
    let message = "";

    if (item.itemName == "") {
      message += "Informe o nome do produto";
    } 
    
    if (message != "") {
      alert(message);
      return false;
    }
    return true;
  }

  deleteItem() {}
}

var product = new Product();
