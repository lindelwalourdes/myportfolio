"use strict;"
// this program is meant to convert weather degrees.

/*
Celsius from Fahrenheit : C = (F-32)*(5/9)
Celsius from Kelvin : C = K - 273.15

Fahrenheit from Celsius: F = C*9/5+32
Fahrenheit from Kelvin: F = k * 9/5-459.67

Kelvin from Celsius: K = C + 273.15
Kelvin from Fahrenheit: K = (F + 459.67)*5/9

NEXT, the user must input the degree 
*/

let tempFrom = prompt("Which metric are you converting \n C - Celsius \n F - Fahrenheit \n K - Kelvin").toUpperCase();
let degree = Number(prompt(" Please enter the degree you want converted"));
let tempTo = prompt("Which metric are you converting to \n C - Celsius \n F - Fahrenheit \n K - Kelvin").toUpperCase();

let ctoF = degree*9/5+32
let ctoK = degree+273.15

let ftoC = (degree-32)*(5/9)
let ftoK = ((degree + 459.67)*5/9)

let ktoC = degree-273.15
let ktoF= degree*9/5-459.67

alert(`You want to convert ${degree} ° ${tempFrom} to ${tempTo} `);

if (tempFrom == 'C' && tempTo == 'F') {
    alert(`${degree} ° Celsius = ${ctoF} ° Fahrenheit`);
}
else if (tempFrom == 'C' && tempTo == 'K') {
    alert(`${degree} ° Celsius = ${ctoK} ° Kelvin`);
}
else if (tempFrom == 'F' && tempTo == 'K') {
    alert(`${degree} ° Fahrenheit = ${ftoK} ° Kelvin`);
}
else if (tempFrom == 'F' && tempTo == 'C') {
    alert(`${degree} ° Fahrenheit = ${ftoC} ° Celsius`);
}
else if (tempFrom == 'K' && tempTo == 'C') {
    alert(`${degree} ° Kelvin = ${ktoC} ° Celsius`);
}
else if (tempFrom == 'K' && tempTo == 'F') {
    alert(`${degree} ° Kelvin = ${ktoF} ° Fahrenheit`);
} else {
    alert("Invalid selection.\n Please enter valid input (C,F or K)");
}



  





