// creating a array in which selected items and prices of items will be added
let basket = [];
let totalPrice = 0;

// function to add food in array
function addFood(itemName, itemPrice) {
    basket.push({ name: itemName, price: itemPrice });
    updateBasket();
}

// 2nd function to select between regular/large
function addFood2(itemName, itemPrice) {
    basket.push({ name: itemName, price: itemPrice });
    updateBasket();
}

// function of price for option between regular and large
function price(n) {
    let ask = prompt("Regular or Large").toLowerCase();
    reg = [70, 90, 90, 90, 80, 70, 80, 80];
    lar = [110, 140, 140, 140, 120, 110, 130, 130];
    if (ask == "regular") {
        return reg[n];
    }
    else {
        return lar[n];
    }
}

// function to remove item from the list
function remove(nameofitem) {
    let index = basket.findIndex(item => item.name === nameofitem);
    if (index !== -1) {
        basket.splice(index, 1);
        updateBasket();
    }
}

// function to update list after removing or adding items 
function updateBasket() {
    const itemsList = document.getElementById('food');
    const total = document.getElementById('total');
    itemsList.innerHTML = '';
    totalPrice = 0;

    // loop to iterate array and display items 
    basket.forEach(itemname => {
        a = document.createElement('li');
        b = document.getElementById('before')
        b.innerHTML = `<b>Cash Receipt</b>`
        a.className = 'item';
        a.innerHTML += ` ${itemname.name} - ${itemname.price}
				<button class="remove-btn" onclick="remove('${itemname.name}')" title= "remove item">-</button>`;
        itemsList.appendChild(a);
        totalPrice += itemname.price;
    });
    total.innerHTML = `<b>Total Amount</b>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${totalPrice}<br>Thank You!`;
}
