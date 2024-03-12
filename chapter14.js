document.getElementById("placeOrder").addEventListener("click", placeOrder);

function calculatePrice(numPizzas, typePizza) {
    var orderPrice = Number(numPizzas) * 10;
    var extraCharge = 0;

    if (typePizza === "Deluxe") {
        extraCharge = 5;
    }

    orderPrice += extraCharge;
    return orderPrice;
}

function calculateDelivery(orderPrice, deliveryCity) {
    var deliveryPrice = 0;

    if (deliveryCity === "Cape Town") {
        deliveryPrice = 2;
    } else if (deliveryCity === "Durban") {
        deliveryPrice = 5;
    }else if (deliveryCity === "Jozi") {
        deliveryPrice = 10;
    } else if (deliveryCity === "Nelspruit") {
        deliveryPrice = 15;
    }

    return deliveryPrice;
}

function placeOrder() {
    var numPizzas = document.getElementById("numPizzas").value;
    var typePizza = document.getElementById("typePizza").value;
    var deliveryCity = document.getElementById("deliveryCity").value;
    var orderPrice = calculatePrice(numPizzas, typePizza);
    var deliveryPrice = calculateDelivery(orderPrice, deliveryCity);

    var totalPrice = orderPrice + deliveryPrice;

    document.getElementById("displayTotal").innerHTML = "Total Price: R" + totalPrice;
}
