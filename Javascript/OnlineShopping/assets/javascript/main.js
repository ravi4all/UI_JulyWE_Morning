window.addEventListener("load", initEvents);
var price = 0;
function initEvents() {
    var ul = document.getElementById("products");
    for(var i = 0; i < products.length; i++){
        var li = document.createElement("li");
        li.className = 'product';
        li.setAttribute('title', products[i].p_id);
        // li.className = 'list-group-item product';
        var p_name = document.createElement("span");
        p_name.innerHTML = products[i].p_name;
        var p_price = document.createElement("span");
        p_price.innerHTML = products[i].p_price;
        var p_image = document.createElement("img");
        p_image.className = 'productImage';
        p_image.setAttribute('src', products[i].p_image);
        var cart_button = document.createElement("button");
        cart_button.innerHTML = "Add to Cart";
        cart_button.className = 'btn btn-primary w-50';
        li.appendChild(p_image);
        li.appendChild(p_name);
        li.appendChild(p_price);
        li.appendChild(cart_button);
        ul.appendChild(li);
        cart_button.addEventListener("click", add);
    }

}

function add(){
    var ul = document.getElementById("cartItems");
    var elem = event.srcElement.parentNode;
    var product = elem.childNodes;
    var elemId = elem.title;
    // console.log(elemId);
    // console.log(elem.childNodes);

    // var li = document.createElement("li");
    // li.innerHTML = elem.innerHTML;
    // ul.appendChild(li);
    obj.addItem(elemId, product[1].innerHTML, product[2].innerHTML, product[0].src);
    printItems();
    calculateTotal(product);
}

function printItems() {
    var ul = document.getElementById("cartItems");
    ul.innerHTML = "";
    obj.itemList.forEach(function(elem){
        var li = document.createElement("li");
        li.className = 'product';
        li.setAttribute('title', elem.id);
        // li.className = 'list-group-item product';
        var p_name = document.createElement("span");
        p_name.innerHTML = elem.name;
        var p_price = document.createElement("span");
        p_price.innerHTML = elem.price;
        var p_image = document.createElement("img");
        p_image.className = 'productImage';
        p_image.setAttribute('src', elem.image);
        var cart_button = document.createElement("button");
        cart_button.innerHTML = "<i class='fas  fa-trash'/>";
        cart_button.className = 'btn btn-primary';
        li.appendChild(p_image);
        li.appendChild(p_name);
        li.appendChild(p_price);
        li.appendChild(cart_button);
        ul.appendChild(li);
        cart_button.addEventListener("click", add);
    })
}

function calculateTotal(product){
    price += parseInt(product[2].innerHTML);
    // console.log(price);
    document.getElementById("total").innerHTML = price;
}