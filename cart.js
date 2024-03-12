
  let items = ["Skirt","Shirt","Blouse","Dress","Wig","Jacket",];
    let nums = [1,2,3,4,5,6];
    let prices = [20,44,51,11,58,47];
    let totalOrderAmt = 0;

    let quantities = [];

    for (let i = 0; i < items.length; i++) {
      quantities[i] = 0;
    }
    
    let totals = [];
    
    for (let i = 0; i < items.length; i++) {
      totals[i] = 0;
    }
    
    function add_selection(u) { 
      quantities[u]++;
      totals[u] = prices[u] * quantities[u];
      totalOrderAmt += prices[u]; 
      display_all();
    };

    function remove_selection(u) { 
      console.log(u);
      if (quantities[u] > 0 ) {
      quantities[u]--;
      totals[u] = prices[u] * quantities[u];
      totalOrderAmt -= prices[u]; 
    };
      display_all();
    };

  function total_selection(u) {
    alert(`Your order total is R${u}`);
  }
    
    function display_all() {

  let myTable =
    "<table><th style='width: 80px; color: green; text-align: center;'>Num</th>";
  myTable +=
    "<th style='width: 80px; color: green; text-align: right;'>Item</th>";
  myTable +=
    "<th style='width: 80px; color: green; text-align: right;'>Price</th>";
  myTable +=
    "<th style='width: 80px; color: green; text-align: right;'>Quantity</th>";
  myTable +=
    "<th style='width: 80px; color: green; text-align: center;'>Add</th>";
  myTable +=
    "<th style='width: 80px; color: green; text-align: right;'>Remove</th>";
    myTable +=
    "<th style='width: 80px; color: green; text-align: right;'>Total</th>";

  for (i = 0; i < items.length; i++) {
    myTable +=
      "<tr><td style='width: 100px; text-align: center;'>" + nums[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: center;'>" + items[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: center;'>" + prices[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: center;'>" + quantities[i] + "</td>";

    myTable +=
    "<td style='width: 100px; text-align: center;'><button onclick='add_selection(" +
    i +
    ")'style='background-color: lightgreen'>Add</button></td>";
    myTable +=
      "<td style='width: 100px; text-align: center;'><button onclick='remove_selection(" +
      i +
      ")'style='background-color: pink'>Remove</button></td>";
      myTable +=
      "<td style='width: 100px; text-align: center;'>" + totals[i] + "</td>";
  }

  myTable += "</table>";
  myTable += "<br/><br/><p><b>Total: </b>" + totalOrderAmt + "</p>";
  myTable += "<td><button onclick='total_selection(" + totalOrderAmt + ")'>Check Out</button></td>"

  // document.write(myTable);
  document.getElementById("demo").innerHTML = myTable;
}

window.onload = function () {
  display_all();
};
