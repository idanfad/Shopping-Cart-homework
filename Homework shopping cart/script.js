let productsList = [
    
    ['Tomato', 12],
    ['Cucumber', 18],
    ['Carrot', 20]
];

let shoppingCart = [];

function addProduct(productName, productPrice) {
    shoppingCart.push([productName, productPrice]);
    renderProductList(shoppingCart);
    console.log(shoppingCart);
}

function clearProductList() {
    shoppingCart = [];
    console.log(shoppingCart);
}

function renderProductList(cartArray) {

    for (let i = 0; i < cartArray.length; i++) {

        let nameText = document.createTextNode(cartArray[i][0]);
        let nameHolder = document.createElement('span');
        nameHolder.append(nameText);
        console.log(nameText);

        let priceText = document.createTextNode(cartArray[i][1] + "ILS");
        let priceHolder = document.createElement('span');
        priceHolder.append(priceText);
        priceHolder.style.textAlign = "center";
        console.log(priceText);

        let removeBtn = document.createElement('button');
        removeBtn.style.backgroundImage = "url('media/22.png')";
        removeBtn.style.backgroundColor = "transparent";
        removeBtn.style.width = "16px";
        removeBtn.style.height = "16px";
        removeBtn.style.border = "none";

        let finalRow = document.createElement('div');
        finalRow.classList.add("productCtr");
        finalRow.append(nameHolder, priceHolder, removeBtn);
        let itemRow = document.getElementById('itemsList');
        finalRow.style.fontSize = "16px";
        finalRow.style.width = "100%";
        itemRow.appendChild(finalRow);
        removeBtn.onclick = function (event) {
            finalRow.remove();
        };
    }
    console.log(cartArray);
    clearProductList();
}

function clearCart(){
    let getElement = document.getElementById('itemsList');
    getElement.innerHTML = "";
}


