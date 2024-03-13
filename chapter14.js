// document.getElementById("placeOrder").addEventListener("click", placeOrder);

// function calculatePrice(numPizzas, typePizza) {
//     var orderPrice = Number(numPizzas) * 10;
//     var extraCharge = 0;

//     if (typePizza === "Deluxe") {
//         extraCharge = 5;
//     }

//     orderPrice += extraCharge;
//     return orderPrice;
// }

// function calculateDelivery(orderPrice, deliveryCity) {
//     var deliveryPrice = 0;

//     if (deliveryCity === "Cape Town") {
//         deliveryPrice = 2;
//     } else if (deliveryCity === "Durban") {
//         deliveryPrice = 5;
//     }else if (deliveryCity === "Jozi") {
//         deliveryPrice = 10;
//     } else if (deliveryCity === "Nelspruit") {
//         deliveryPrice = 15;
//     }

//     return deliveryPrice;
// }

// function placeOrder() {
//     var numPizzas = document.getElementById("numPizzas").value;
//     var typePizza = document.getElementById("typePizza").value;
//     var deliveryCity = document.getElementById("deliveryCity").value;
//     var orderPrice = calculatePrice(numPizzas, typePizza);
//     var deliveryPrice = calculateDelivery(orderPrice, deliveryCity);

//     var totalPrice = orderPrice + deliveryPrice;

//     document.getElementById("displayTotal").innerHTML = "Total Price: R" + totalPrice;
// }

// listen for button clicks
document.getElementById("placeOrder").addEventListener
("click", placeOrder);
/**
 * gets form values
 * calculates prices
 * produces output
 */
function placeOrder() {
 // get form values
 var numPizzas =
document.getElementById("numPizzas").value;
 var typePizza =
document.getElementById("typePizza").value;
 var deliveryCity =
document.getElementById("deliveryCity").value;
 var birthday =
document.getElementById("birthday").value;
 // get the pizza price
 var orderPrice = calculatePrice(numPizzas, typePizza);
 // get the delivery price
 var deliveryPrice = calculateDelivery(orderPrice,
    deliveryCity, birthday);
     // create the output
     var theOutput = "<p>Thank you for your order.</p>";
     // output the delivery price, if there is one
     if (deliveryPrice === 0) {
     theOutput += "<p>You get free delivery!</p>";
     } else {
     theOutput += "<p>Your delivery cost is: R" +
    deliveryPrice;
     }
     theOutput += "<p>Your total is: R" + (orderPrice +
    deliveryPrice);
     // display the output
     document.getElementById("displayTotal").innerHTML =
    theOutput;
    }
    /**
     * calculates pizza price
     */
    function calculatePrice(numPizzas, typePizza) {
     var orderPrice = Number(numPizzas) * 10;
     var extraCharge = 0;
     // calculate extraCharge, if there is one
     if (typePizza === "Bacon") {
     extraCharge = Number(numPizzas) * 2;
     }
     orderPrice += extraCharge;
     return orderPrice;
    }
    // calculates delivery price
   function calculateDelivery(orderPrice, deliveryCity,
   birthday) {
    var deliveryPrice = 0;
    // calculate delivery price, if there is one
    if (((deliveryCity === "Jozi") && (orderPrice >
   10)) || (birthday === "yes")) {
    deliveryPrice = 0;
    } else {
    deliveryPrice = 5;
    }
    return deliveryPrice;
   }