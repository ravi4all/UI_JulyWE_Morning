function Item(id, name, price, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
}

var obj = {
    itemList : [],

    addItem : function(id,name,price,image){
        var item = new Item(id,name,price,image);
        this.itemList.push(item);
        console.log(this.itemList);
    }
}