let options = prompt("Which metric are you converting \n C - Celsius \n F - Fahrenheit \n K - Kelvin");
let userDeg = Number(prompt("What is the value of "+ options));
 var total = console.log(userDeg + options)

let optionTwo = prompt("Which metric are you converting to \n C - Celsius \n F - Fahrenheit \n K - Kelvin");

switch(options) {
    case 'Celsius':
        if(optionTwo == 'Fahrenheit') {
            console.log(total)
        }
}


°

alert("You want to convert from " + (userDeg) + " degrees " + (options));