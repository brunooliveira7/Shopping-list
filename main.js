class Product {
  constructor() {
    this.arrayItems = [];
  }

  addItem() {
    //pegando o objeto do captureData e jogando dentro da var item
    let item = this.captureData();

    console.log(item);
    this.validateData();
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

  validateData() {
    //pegando os dados digitados
    let item = this.captureData();

    //se o itemName não estiver vazio, ele vai adicionar o item na arrayItems
    if (item.itemName) {
      this.arrayItems.push(item);
      console.log(this.arrayItems);
    } else {
      console.log("Por favor, preencha o nome do item.");
    }
  }

  deleteItem() {}
}

var product = new Product();
