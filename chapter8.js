let dreamCar = {
    make: "BMW",
    model: "M8",
    color: "Blue",
    year: 2023,
    bodyStyle: "Luxury Car",
    price: 5000
   };

   //alert("The type of dreamCar is: " + typeof dreamCar);
document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;
